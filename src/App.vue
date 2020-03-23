<template>
  <div > 
 <app-nav-bar></app-nav-bar>
  <router-view></router-view>
  </div>
 
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    "app-nav-bar": NavBar
  }
};
</script>

<style scoped>
</style>
