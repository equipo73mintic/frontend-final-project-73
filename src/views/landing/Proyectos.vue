<template>
  <div class="proyectos">
    <proyectos-router></proyectos-router>
    <landing-footer> </landing-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import ProyectosRouter from "@/components/ProyectosRouter.vue";
import LandingFooter from "@/components/LandingFooter.vue";

export default {
  name: "Proyectos",
  components: {
    ProyectosRouter,
    LandingFooter,
  },
};
</script>

<style >
.proyectos {
  background-color: white;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
}
</style>
