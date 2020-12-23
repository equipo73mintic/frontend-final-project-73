<template>
  <div class="proyectos">
    <contacto-router></contacto-router>
    <landing-footer> </landing-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactoRouter from "@/components/ContactoRouter.vue";
import LandingFooter from "@/components/LandingFooter.vue";

export default {
  name: "Contacto",
  components: {
    ContactoRouter,
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
