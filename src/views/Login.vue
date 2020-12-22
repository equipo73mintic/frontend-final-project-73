<template>
  <div class="d-flex justify-content-center p-5">
    <TheLogin msg="Iniciar sesión"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheLogin from '@/components/TheLogin.vue'

export default {
  name: 'Login',
  components: {
    TheLogin
  }
}
</script>