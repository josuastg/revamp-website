<template>
  <div class="content">
    <div class="img-logo" :style="item" />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      item: {
        backgroundImage: `url(${require("../../assets/mobile_logo.png")})`
      }
    };
  }
};
</script>

<style scoped>
@import "./mobile.css";
</style>