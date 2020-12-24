<template>
  <div class="container">
    <div>Contribuimos a la disminución de la huella de carbon</div>
    <div class="row">
      <div class="col-4">
        <div class="row">
          <div class="col-5">
            <img src="@/assets/ImagenesIcon/icon1.png" alt="" />
          </div>
          <div class="col-7">
            <p>Ahorros de Energía de GY en Colombia</p>
            <p>383.200.489 kWh/año</p>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="row">
          <div class="col-5">
            <img src="@/assets/ImagenesIcon/icon2.png" alt="" />
          </div>
          <div class="col-7">
            <p>Toneladas de CO2 evitadas</p>
            <p>131'915.042 ton/año</p>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="row">
          <div class="col-5">
            <img src="@/assets/ImagenesIcon/icon3.png" alt="" />
          </div>
          <div class="col-7">
            <p>Ahorros equivalentes al efecto depurativo de</p>
            <p>634'206.933 árboles</p>
          </div>
        </div>
      </div>
    </div>

    <div>Proyectos</div>
    <div class="row">
      <!-- car 1 -->
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="@/assets/ImagenesProyecto/pro1.png" />
          </div>
          <div class="flip-card-back">
            <span class="title-projects"
              >Sistema fotovoltaico en zona rural</span
            >
            <br />
            <br />
            <p>Municipio de El Tambo (Nariño)</p>
            <br>
            <p>Año: 2017</p>
          </div>
        </div>
      </div>

      <!-- car 2 -->
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="@/assets/ImagenesProyecto/pro2.png" />
          </div>
          <div class="flip-card-back">
            <span class="title-projects"
              >Purificador de Agua en zonas costeras</span
            >
            <br />
            <br />
            <p>Departamento de La Guajira</p>
            <br />
            <p>Año: 2018 - 2019</p>
          </div>
        </div>
      </div>

      <!-- car 3 -->
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="@/assets/ImagenesProyecto/pro3.png" />
          </div>
          <div class="flip-card-back">
            <span class="title-projects">Edificio Verde</span>
            <br />
            <br />
            <p>Ciudad de Bogotá D.C.</p>
             <br>
            <p>Año: 2019</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingInfo",
};
</script>

<style >
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: #8dc13f;
  color: white;
  transform: rotateY(180deg);
}

.row {
  justify-content: space-evenly;
}

.card {
  display: flex;
  flex-direction: row;
}

img {
  width: 100%;
  height: 100%;
}
</style>