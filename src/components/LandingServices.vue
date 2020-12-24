<template>
  <div class="container">
    <div class="section">Nuestros Servicios</div>
    <div class="row">
      <div class="col-4" v-bind:key="service" v-for="service in services">
        <div class="card">
          <div class="card-body">
            <div class="container">
              <div class="row">
                <img class="image" v-bind:src="service.urlImage" />
              </div>
              <div class="row">
                <div class="title">
                  <h3>
                    <strong> {{ service.nombre }} </strong>
                  </h3>
                </div>
              </div>
              <div class="row">
                <p class="description">
                  {{ service.descripcion }}
                </p>
              </div>
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
  min-width: 300px;
  min-height: 200px;
}

.card {
  min-height: 400px;
}
</style>