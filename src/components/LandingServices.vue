<template>
  <div class="container">
    <div class="section">Nuestros Servicios</div>
    <div class="row">
      <div class="col-4" v-bind:key="service" v-for="service in services">
        <div class="card" v-if="service.estado > 0">
          <div class="card-body">
            <div class="container">

            <img class="image" v-bind:src="service.urlImage"  />

            <div class="title">
              <h3> <strong> {{ service.nombre }} </strong> </h3>
            </div>

            <p class="description">
              {{ service.descripcion }}
            </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LandingServices",
  data: () => ({
    services: [],
  }),
  created() {
    this.list();
  },
  methods: {
    list() {
      this.$http
        .get("/api/articulo/list")
        .then((response) => {
          this.services = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.description {
  font-size: 1rem;
}

.image{
  height: 50%;
  width: 50%
}

.card {
    min-height: 200px;
}
</style>