<template>
  <h1>
    Qui metto quello che non cambia
  </h1>
  <Appheader />

  <!-- # questo e' il luogo dove tutto puo' cambiare in base alle rotte -->
  <router-view></router-view>
</template>

<script>
import Appheader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    Appheader,
  }
}
</script>

<style lang="scss">
@use './style/general.scss' as *;
</style>
