<template>
  <div class="nosotros">
    <nosotros-router></nosotros-router>
    <landing-footer> </landing-footer>
  </div>
</template>

<script>  
// @ is an alias to /src
import NosotrosRouter from '@/components/NosotrosRouter.vue'
import LandingFooter from "@/components/LandingFooter.vue";

export default {
  name: 'Nosotros',
  components: {
    NosotrosRouter,
    LandingFooter,
  }
}
</script>

<style >
 .nosotros{
   background-color:white;
 }
 footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
}
</style>
