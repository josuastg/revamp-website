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
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
#title {
  font-weight: 600;
  width: 120px;
  height: 40px;
  font-stretch: normal;
  font-style: normal;
  font-size: 14px;
  line-height: normal;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.07px;
}
</style>