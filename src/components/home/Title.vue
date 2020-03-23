<template>
  <div class="container">
    <p class="title">PENGIRIMAN CEPAT & MURAH</p>
    <app-subtitle></app-subtitle>
    <slot></slot>
    <!-- <app-button-group></app-button-group> -->
  </div>
</template>

<script>
import Subtitle from "./Subtitle";
// import ButtonGroup from "./ButtonGroup";
export default {
  components: {
    "app-subtitle": Subtitle
    // "app-button-group": ButtonGroup
  }
};
</script>

<style scoped >
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
.title {
  text-align: center;
  font-weight: 600;
  font-size: 25.5px;
  font-family: "Poppins", sans-serif;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-top: 20px;
  object-fit: contain;
}
</style>