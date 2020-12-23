import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/landing/Home.vue'
import Nosotros from '../views/landing/Nosotros.vue'
import Proyectos from '../views/landing/Proyectos.vue'
import Contacto from '../views/landing/Contacto.vue'
import Landing from '../views/Landing.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Landing',
        component: Landing,
        meta: {
            public: true
        },
        children: [{
                path: '/',
                name: 'Home',
                component: Home,
                meta: {
                    public: true
                }
            },
            {
                path: '/nosotros',
                name: 'Nosotros',
                component: Nosotros,
                meta: {
                    public: true
                }
            },
            {
                path: '/proyectos',
                name: 'Proyectos',
                component: Proyectos,
                meta: {
                    public: true
                }
            },
            {
                path: '/contacto',
                name: 'Contacto',
                component: Contacto,
                meta: {
                    public: true
                }
            },

        ]
    },

    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue'),
        meta: {
            public: true
        }
    },

    {
        path: '/auth',
        name: 'Authorized',
        component: () =>
            import ( /* webpackChunkName: "auth" */ '../views/Authorized.vue'),
        meta: {
            auth: true,
            vendedor: true
        },
        children: [{
                path: '/',
                name: 'Bienvenida',
                component: () =>
                    import ( /* webpackChunkName: "bienvenida" */ '../views/auth/Bienvenida.vue'),
                meta: {
                    auth: true,
                    vendedor: true
                }
            },
            {
                path: 'categorias',
                name: 'Categorias',
                component: () =>
                    import ( /* webpackChunkName: "categorias" */ '../views/auth/Categorias.vue'),
                meta: {
                    auth: true,
                    vendedor: true
                }
            },
            {
                path: 'articulos',
                name: 'Articulos',
                component: () =>
                    import ( /* webpackChunkName: "categorias" */ '../views/auth/Articulos.vue'),
                meta: {
                    auth: true,
                    vendedor: true
                }
            },
            {
                path: 'usuarios',
                name: 'Usuarios',
                component: () =>
                    import ( /* webpackChunkName: "categorias" */ '../views/auth/Usuarios.vue'),
                meta: {
                    auth: true,
                    admin: true,
                }
            },
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    // Recargamos el autologin
    store.dispatch("autoLogin");
    // Si la ruta a la que voy es pública
    if (to.matched.some(record => record.meta.public)) {
        next();
    }
    // Si la ruta requiere autorización
    else if (to.matched.some(record => record.meta.auth)) {
        // Si el usuario está logeado
        if (store.state.user) {
            const rol = store.state.user.rol;
            // Si el usuario es admin
            if (rol == 'Administrador') {
                next();
            }
            // Si es vendedor o almacenero
            else {
                //Si necesita permisos de administrador
                if (to.matched.some(record => record.meta.admin)) {
                    next({ name: 'Bienvenida' });
                } else {
                    next();
                }
            }
            // Si no estás logeado, ve a logearte  
        } else {
            next({ name: 'Login' })
        }
    }
    // Sino 
    else {
        next();
    }
})

export default router