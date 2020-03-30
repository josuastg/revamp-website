<template>
  <div class="container">
    <p class="title">PENGIRIMAN CEPAT & MURAH</p>
    <app-subtitle></app-subtitle>
    <slot></slot>
  </div>
</template>

<script>
import Subtitle from "../subtitle/Subtitle";
export default {
  components: {
    "app-subtitle": Subtitle
  }
};
</script>

<style scoped >
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
.title {
  text-align: center;
  font-weight: 600;
  font-size: 22px;
  width: 100%;
  height: 100%;
  color: #1a1421;
  font-family: "Poppins", sans-serif;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  object-fit: contain;
}
</style>