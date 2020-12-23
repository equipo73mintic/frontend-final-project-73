<template>
  <div >
    <landing-carousel> </landing-carousel>
    <landing-info> </landing-info>
    <landing-services> </landing-services>
    <landing-customers> </landing-customers>
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
