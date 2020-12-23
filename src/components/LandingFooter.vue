<template>
  <div>
    <!-- Footer -->
    <footer class="bg-light text-center text-lg-start">
      <!-- Grid container -->
      <div class="container p-4">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">Contáctanos</h5>

            <p>Bogotá, Colombia</p>
            <p>Carrera 100 # 45 – 17</p>
            <p>Telefóno: +57 3193138564</p>
            <p>contacto@greenenergy.com.co</p>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="">Redes Sociales</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <div class="d-flex justify-content-center links">
                  <a
                    href="https://github.com/equipo73mintic/front-semana-3-73.git"
                    target="_blank"
                  >
                    <i class="fab fa-github fa-fw Git-hub"> </i>
                  </a>
                </div>
              </li>

              <li>
                <div class="d-flex justify-content-center links">
                  <a
                    href="https://github.com/equipo73mintic/front-semana-3-73.git"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin-in fa-fw Git-hub"></i>
                  </a>
                </div>
              </li>

              <li>
                <div class="d-flex justify-content-center links">
                  <a
                    href="https://github.com/equipo73mintic/front-semana-3-73.git"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-f fa-fw Git-hub"> </i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <!--Grid column-->

        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2020 Copyright:
        <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
export default {
  name: "LandingFooter",
};
</script>

<style>
.Git-hub {
  font-size: 40px;
  color: #8dc13f;
}

.text {
  color: #355a2a !important;
  font: oblique bold 90% cursive;
  font-style: italic;
}

.text_company {
  color: #355a2a !important;
  font: oblique bold 120% cursive;
}

ul {
  display: flex;
  padding: 0 !important;
}
</style>