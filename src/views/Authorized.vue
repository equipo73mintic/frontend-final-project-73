<template>
    <div>
        <auth-component>
        </auth-component>
    </div>
</template>

<script>
import AuthComponent from '../components/AuthComponent.vue'

export default {
    name: 'Authorized',
    components: {
        AuthComponent,
    }
    
}
</script>