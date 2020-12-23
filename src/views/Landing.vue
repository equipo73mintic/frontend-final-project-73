<template>
  <div class="landign-container">
    <nav class="navbar navbar-expand-lg float-right">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav navegadores">
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
        <a @click="$router.push({ path: '/login' })" type="button" class="myButton">Login</a>
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
  color: #fff;
}

.landign-container{
  display: flex; 
  flex-direction:column;
  background-color:#000000;
}

.myButton {
	box-shadow:inset 0px 1px 0px 0px #d9fbbe;
	background:linear-gradient(to bottom, #b8e356 5%, #a5cc52 100%);
	background-color:#b8e356;
	border-radius:6px;
	border:1px solid #8dc13f;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #86ae47;
}
.myButton:hover {
	background:linear-gradient(to bottom, #a5cc52 5%, #b8e356 100%);
	background-color:#a5cc52;
}
.myButton:active {
	position:relative;
	top:1px;
}

.nav-link{
  color:  #8dc13f !important;
}

</style>
