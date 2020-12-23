<template>
  <div class="home">
    <h1>home</h1>
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
