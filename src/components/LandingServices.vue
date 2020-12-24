<template>
  <h1 class="container">
    <div class="row">
      <div class="col-4" v-bind:key="service" v-for="service in services">
        <div class="card">
          <div class="card-body">
            
            <img class="image" v-bind:src="service.urlImage" alt="" />

            <div class="title">
              <h3>{{ service.codigo }}-{{ service.nombre }}</h3>
            </div>

            <p class="description">
              {{ service.descripcion }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </h1>
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
</style>