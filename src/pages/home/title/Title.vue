<template>
  <div class="container">
    <p class="home-title">PENGIRIMAN CEPAT & MURAH</p>
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

<style >
@import "./title.css";
</style>