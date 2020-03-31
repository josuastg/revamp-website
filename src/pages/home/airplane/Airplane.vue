<template>
  <div class="container">
    <div class="content">
      <div class="content-on-desktop" v-if="isDesktop()">
        <div :style="firstitem" class="second-cloud">
          <img src="../../../assets/airplane.png" class="airplane" />
        </div>
        <div :style="seconditem" class="third-cloud"></div>
      </div>
      <div class="content-on-mobile" v-if="isMobile()">
        <div :style="thirditem" class="second-cloud">
          <img src="../../../assets/airplane.png" class="airplane" />
        </div>
        <div :style="seconditem" class="fourth-cloud"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstitem: {
        backgroundImage: `url(${require("../../../assets/secondcloud.png")})`
      },
      seconditem: {
        backgroundImage: `url(${require("../../../assets/thirdcloud.png")})`
      },
      thirditem: {
        backgroundImage: `url(${require("../../../assets/suncloud.png")})`
      }
    };
  },
  created() {
    window.addEventListener("resize", this.isMobile);
    this.isMobile();
    this.isDesktop();
  },
  destroyed() {
    window.addEventListener("resize", this.isMobile);
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
    isDesktop() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
@import "./airplane.css";
</style>