<template>
  <div class="landing">
    <landing-carousel> </landing-carousel>
    <landing-info> </landing-info>
    <landing-services> </landing-services>
    <landing-customers> </landing-customers>
    <br>
    <br>
    <landing-footer> </landing-footer>
  </div>
</template>

<script>
import LandingCarousel from "@/components/LandingCarousel.vue";
import LandingInfo from "@/components/LandingInfo.vue";
import LandingServices from "@/components/LandingServices.vue";
import LandingCustomers from "@/components/LandingCustomers.vue";
import LandingFooter from "@/components/LandingFooter.vue";

export default {
  name: "LandingPage",
  components: {
    LandingCarousel,
    LandingInfo,
    LandingServices,
    LandingCustomers,
    LandingFooter,
  },

}
</script>


<style>
 .section{
   font-family: 'Nerko One', cursive;
   font-size: 30px;
   color:  #355a2a;
   text-align:center;
 }
 p{
   font-family: 'Patrick Hand', cursive;
   font-size: 20px;
 }
 h3{
   font-family: 'Patrick Hand', cursive;
    color: #8dc13f
 }
</style>

