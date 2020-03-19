<template>
    <button class="button is-danger is-outlined">{{title}}</button>
 
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
.title {
  font-weight: 600;
  width: 82px;
  height: 16px;
  font-stretch: normal;
  font-style: normal;
  font-size: 14px;
  line-height: normal;
  font-family: Poppins;
  letter-spacing: 0.07px;
}
</style>