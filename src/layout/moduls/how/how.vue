<template>
  <div>
    <Mheader></Mheader>
    <router-view></router-view>
  </div>
</template>

<script>
import Mheader from '@/layout/header/mheader'
export default {
  name: 'how',
  components: {
    Mheader
  }
}
</script>

<style scoped>

</style>
