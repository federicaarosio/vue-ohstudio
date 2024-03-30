<template>
  <!-- Qui metto quello che non cambia -->
  <Appheader />

  <!-- qui quello che cambia in base alle rotte -->
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
