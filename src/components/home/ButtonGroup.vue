<template>
  <div class="button-group">
    <!-- <div class="buttons"> -->
      <div class="columns">
        <div class="column">
          <app-check-price-button title="Check Price"></app-check-price-button>
        </div>
        <div class="column">
          <app-track-button title="Tracking"></app-track-button>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import TrackButton from "../RedButton";
import CheckPriceButton from "../WhiteButton";
export default {
  components: {
    "app-track-button": TrackButton,
    "app-check-price-button": CheckPriceButton
  }
};
</script>

<style scoped>
.button-group {
  display: flex;
  justify-content: center;
  margin-top: 5px;
}
</style>