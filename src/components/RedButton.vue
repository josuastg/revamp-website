<template>
  <a >
    <button class="button is-danger is-hovered"> <p class="title"> {{title}}</p></button>
  </a>
</template>

<script>
export default {
  props: ["title", "link"]
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
.title {
  font-weight: 600;
  width: 86px;
  height: 19px;
  font-family: "Poppins", sans-serif;
  font-stretch: normal;
  font-style: normal;
  font-size: 14px;
  color: white;
  line-height: normal;
  letter-spacing: 0.07px;
}
</style>