<template>
  <div class="content-image">
    <div class="img-two" :style="item">
      <div class="img-one">
        <img src="../../assets/mobile_small_three.png" />
      </div>
      <div class="img-three">
        <img src="../../assets/mobile_small_six.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        backgroundImage: `url(${require("../../assets/mobile_small_three.png")})`
      }
    };
  }
};
</script>

<style scoped>
.content-image {
  flex-direction: row;
  display: flex;
}
.img-one {
  width: 240px;
  height: 352px;
}
.img-three {
  width: 240px;
  height: 352px;
}
.img-two {
  width: 240px;
  height: 352px;
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  background-position: center;
}
</style>