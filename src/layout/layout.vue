<template>
  <div class="app-home">
    <router-view></router-view>
    <Mfooter></Mfooter>
  </div>
</template>

<script>
import Mfooter from './footer/mfooter'
export default {
  name: 'layout',
  components: {
    Mfooter
  }
}
</script>

<style scoped>

</style>
