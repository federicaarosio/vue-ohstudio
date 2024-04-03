<template>
  <!-- Qui metto quello che non cambia -->
  <Appheader />

  <!-- qui quello che cambia in base alle rotte -->
  <router-view></router-view>

  <AppFooter />
</template>

<script>
import Appheader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'App',
  components: {
    Appheader,
    AppFooter
  }
}
</script>

<style lang="scss">
@use './style/general.scss' as *;

</style>
