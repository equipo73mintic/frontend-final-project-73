<template>
  <div class="landign-container">
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
    <section>
      <router-view/>
    </section>
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

nav {
  align-self: flex-end;
}


.landign-container{
  display: flex; 
  flex-direction:column;
}
</style>
