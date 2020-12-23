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
