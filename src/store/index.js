import Vue from 'vue'
import Vuex from 'vuex'
import jwtDecode from 'jwt-decode'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null,
    user: null,
  },
  mutations: {
    setToken(state, token){
        state.token = token;
    },   
    setUser(state, user){
        state.user = user;
    }
  },
  actions:{
    guardarToken({commit}, token){
        commit("setToken", token);
        localStorage.setItem("token", token);
        commit("setUser", jwtDecode(token));
        console.log(jwtDecode(token));
    },
    autoLogin({commit}){
        let token = localStorage.getItem("token");
        if (token){
            commit("setToken", token);
            commit("setUser", jwtDecode(token));
        } else{
            return false;
        }
    },
    salir({commit}){
        commit("setToken", null);
        commit("setUser", null);
        localStorage.removeItem('token');
        router.push({name: 'Home'});
    }
  },
})

export default store