<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view/>
  </div>
</template>

<script>
import topNav from '@/components/navigation/top-nav';
export default {
  name: 'main-app',
  components: {
    topNav
  }
}
</script>

<style lang="scss">
  // Importing global styles to use application wide. Other components have scoped styles. 
  @import "./styles/main";
</style>
