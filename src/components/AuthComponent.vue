<template>
    <v-app id="inspire">
    <v-app-bar app color="deep-purple darken-4" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Área de gestión</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        icon
        class="mr-5"
        @click="salir()"
      >
        <v-icon> mdi-logout </v-icon>
        <span>Log Out</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-card
        class="mx-auto"
        width="300"
      >
        <v-list>
          <v-list-item
          :to="{ name: 'Home' }">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
    
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
    
          <v-list-group
            :value="true"
            prepend-icon="mdi-buffer"
          >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Gestionar</v-list-item-title>
                </v-list-item-content>
              </template>
    
              <v-list-item
                v-for="([title, icon, route], i) in admins"
                :key="i"
                :to="{name: route}"
              >
                <v-list-item-title v-text="title"></v-list-item-title>
    
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
    
            <v-list-group
            v-if="this.$store.state.user.rol === 'Administrador'"
            :value="false"
            prepend-icon="mdi-cog"

            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Admin</v-list-item-title>
                </v-list-item-content>
              </template>
    
              <v-list-item
                v-for="([title, icon, route], i) in cruds"
                :key="i"
                :to="{name: route}"
              >
                <v-list-item-title v-text="title"></v-list-item-title>
    
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main class="blue lighten-4">
      <v-container>
          <router-view/>
      </v-container>
    </v-main>
  </v-app> 
</template>

<script>
import swal from "sweetalert";

export default {
  name: 'AuthComponent',
  components: {
  },
    data: () => ({
    drawer: null,
   
    admins: [
      ['Categorias', 'mdi-book', 'Categorias'],
      ['Servicios', 'mdi-shopping', 'Articulos'],
    ],
    cruds: [
      ['Usuarios', 'mdi-account-multiple-outline', 'Usuarios'],
    ],
  }),
  // created(){
  //     this.$store.dispatch("autoLogin")? this.$router.push('/auth') : false;
  // },
  methods:{
    salir(){
      swal({
        title: "¿Seguro que quieres cerrar sesión?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          this.$store.dispatch("salir");
          swal("Salida exitosa", {
            icon: "success",
          });
        } 
      });

    }
  }

};
</script>
