<template>
  <a>
    <button class="button is-danger is-hovered">
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