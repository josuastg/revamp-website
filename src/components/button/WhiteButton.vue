<template>
  <a >
    <button class="button is-danger is-outlined" id="title">{{title}}</button>
  </a>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
@import "./whitebutton.css";
</style>