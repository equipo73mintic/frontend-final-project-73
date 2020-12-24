<template>
  <div class="home">
    <landing-page></landing-page>
  </div>
</template>

<script>  
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'

export default {
  name: 'Home',
  components: {
    LandingPage
  }
}
</script>
<style >
 .home{
   background-color:white;
 }
</style>
