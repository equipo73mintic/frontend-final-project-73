<template>
  <div class="container">
    <div class="section">Equipo</div>
    <div class="team">
      <div class="row">
        <div class="col-4">
          <div class="card team">
            <div class="card-body">
              <div>
                <img src="@/assets/Team/geral.jpeg" alt="" />
              </div>
              <h1 class="title">Geraldine Claros</h1>
              <p>Desarrolladora Frontend</p>
              <a href="#"><i class="fab fa-linkedin Git-hub"></i></a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card team">
            <div class="card-body">
              <div>
                <img src="@/assets/Team/yaser.jpeg" alt="" />
              </div>
              <h1 class="title">Yasar José Cure González</h1>
              <p>Desarrollador Backend</p>
              <a href="#"><i class="fab fa-linkedin Git-hub"></i></a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card team">
            <div class="card-body">
              <div>
                <img src="@/assets/Team/wolf.jpeg" alt="" />
              </div>
              <h1 class="title">Wolfgang Jose Santamaria Cordoba</h1>
              <p>Tester</p>
              <a href="#"><i class="fab fa-linkedin Git-hub"></i></a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-4">
          <div class="card team">
            <div class="card-body">
              <div>
                <img src="@/assets/Team/andres.jpeg" alt="" />
              </div>
              <h1 class="title">Jaime Andres Bravo Buitrago</h1>
              <p>Arquitecto</p>
              <a href="#"><i class="fab fa-linkedin Git-hub"></i></a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card team">
            <div class="card-body">
              <div>
                <img src="@/assets/Team/jason.jpeg" alt="" />
              </div>
              <h1 class="title">Jason Roberto Camargo</h1>
              <p>Analista</p>
              <a href="#"><i class="fab fa-linkedin Git-hub"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mision/Vision -->
    <div>
      <div class="section">Mision & Visión</div>

      <div class="row">
        <div class="col-6">
          <div class="card misvis">
            <div class="card-body">
              <p class="title">MISIÓN</p>
              <p class="texto">
                Hacer de la energía solar un servicio para la gente, ofreciendo
                productos que estén al alcance de todos y que impulsen el
                desarrollo económico, social y ambiental de las regiones en las
                que operamos. A esto le llamamos:
                <strong> ENERGÍA PARA LA GENTE. </strong>
              </p>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="card misvis">
            <div class="card-body">
              <p class="title">VISIÓN</p>

              <p class="texto">
                <strong> HACIA EL CLIENTE </strong> Facilitar el acceso y uso de
                las energías renovables, transmitiendo el amor y pasión por la
                energía solar y el cuidado del medio ambiente. A esto le
                llamamos: <strong> LA ENERGÍA EVOLUCIONA. </strong> ​
              </p>

              <p class="texto">
                <strong> HACIA EL EMPLEADO </strong> Ser un lugar de trabajo
                agradable, donde las personas sean felices donde se cree sentido
                de pertenencia por la compañía.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Valores -->
    <div>
      <div class="section">Valores</div>
      <div class="row">
        <div class="col-3">
          <div class="card valores">
            <div class="card-body">
              <div>
                <i class="fas fa-heart fa-fw Git-hub"> </i>
              </div>
              <p class="title">PASIÓN</p>
              <p class="texto">
                Vivimos y respiramos energía solar; lo que se proyecta en cada
                una de las acciones realizadas por los empleados de la compañía
              </p>
            </div>
          </div>
        </div>

        <div class="col-3">
          <div class="card valores">
            <div class="card-body">
              <div>
                <i class="fas fa-hand-holding-heart fa-fw Git-hub"> </i>
              </div>
              <p class="title">TRANSPARENCIA</p>
              <p class="texto">
                Todos los Servicios desarrollados por Darwin son entregados al
                cliente con el fin de generar valor para ambas partes.
              </p>
            </div>
          </div>
        </div>

        <div class="col-3">
          <div class="card valores">
            <div class="card-body">
              <div>
                <i class="fas fa-handshake fa-fw Git-hub"> </i>
              </div>
              <p class="title">EMPATÍA</p>
              <p class="texto">
                Transmitimos nuestra pasión y buena energía a través de una
                sonrisa a todas las personas que escuchan nuestra empresa.
              </p>
            </div>
          </div>
        </div>

        <div class="col-3">
          <div class="card valores">
            <div class="card-body">
              <div>
                <i class="fas fa-people-carry fa-fw Git-hub"> </i>
              </div>

              <p class="title">TRABAJO EN EQUIPO</p>
              <p class="texto">
                Cada persona es parte importante de la empresa, ya que tenemos
                clara que solo avanzamos si vamos en la misma dirección y a la
                misma velocidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NosotrosRouter",
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}

.title {
  /* font-family: "Patrick Hand", cursive; */
  color: #355a2a;
  font-size: 18px;
}
h1{
  font-family: 'Nerko One', cursve;
}
img {
  width: 200px;
  height: 200px;
  border-radius: 150px;
}
.texto {
  text-align: justify;
}
.team {
  min-height: 400px;
}
.misvis {
  min-height: 350px;
  min-width: 450px;
}
.valores {
  min-height: 330px;
}
</style>