<template>
  <div class="content-title">
    <div class="container">
      <p class="title">PENGIRIMAN CEPAT & MURAH</p>
      <app-subtitle></app-subtitle>
      <slot></slot>
    </div>
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
  object-fit: contain;
}

.content-title{
  margin-bottom: 10px;
}
</style>