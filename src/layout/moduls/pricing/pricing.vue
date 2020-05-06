<template>
  <div>
    <Mheader></Mheader>
    <router-view></router-view>
  </div>
</template>

<script>
import Mheader from '@/layout/header/mheader'
export default {
  name: 'pricing',
  components: {
    Mheader
  }
}
</script>

<style scoped>

</style>
