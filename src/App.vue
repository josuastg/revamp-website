<template>
  <div>
    <app-nav-bar></app-nav-bar>
    <div >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/navbar/NavBar";
export default {
  name: "App",
  components: {
    "app-nav-bar": NavBar
  }
};
</script>

<style scoped>
</style>
