<template>
  <div class="container ">
    <nav class="navbar navbar-expand-lg float-right">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Proyectos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" >Contacto</a>
          </li>
        </ul>
        <button @click="$router.push({ path: '/login' })" class="btn btn-secondary btn-lg">Login</button>
      </div>
    </nav>
  </div>

  <!-- <v-app id="inspire">
    <v-app-bar app color="deep-purple darken-4" dark>
      <v-toolbar-title>PageName</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon class="mr-5" :to="{ path: '/login' }">
        <v-icon> mdi-login </v-icon>
        <span>Log In</span>
      </v-btn>
    </v-app-bar>

    <v-main class="">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
 <a class="btn btn-outline-success" type="button" :to="{ path: '/login' }">Search</a> -->
</template>

<style>
#landing {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
