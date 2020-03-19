<template>
  <div class="container">
    <p class="title">FAST AND CHEAP DELIVERY</p>
    <app-subtitle></app-subtitle>
    <app-button-group></app-button-group>
  </div>
</template>

<script>
import Subtitle from "./Subtitle";
import ButtonGroup from "./ButtonGroup";
export default {
  components: {
    "app-subtitle": Subtitle,
    "app-button-group": ButtonGroup
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  font-weight: 600;
  font-size: 25.5px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  object-fit: contain;
  margin-top: 40px;
}
</style>