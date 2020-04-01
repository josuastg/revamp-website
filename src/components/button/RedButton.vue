<template>
  <a>
    <button class="button is-danger">
      <p class="title">{{title}}</p>
    </button>
  </a>
</template>

<script>
export default {
  props: ["title", "link"]
};
</script>

<style scoped>
@import "./redbutton.css";
</style>