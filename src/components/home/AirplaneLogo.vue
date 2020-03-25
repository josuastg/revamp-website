<template>
  <div class="container">
    <div class="content">
      <div class="content-on-desktop" v-if="isDesktop()">
        <div :style="firstitem" class="second-cloud">
          <img src="../../assets/airplane.png" class="airplane" />
        </div>
        <div :style="seconditem" class="third-cloud"></div>
      </div>
      <div class="content-on-mobile" v-if="isMobile()">
        <div :style="thirditem" class="second-cloud">
          <img src="../../assets/airplane.png" class="airplane" />
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
        backgroundImage: `url(${require("../../assets/secondcloud.png")})`
      },
      seconditem: {
        backgroundImage: `url(${require("../../assets/thirdcloud.png")})`
      },
      thirditem: {
        backgroundImage: `url(${require("../../assets/suncloud.png")})`
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
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

@media (min-width: 360px) {
  .airplane {
    margin-left: 10px;
    background-size: contain;
    object-fit: contain;
  }
}
@media (min-width: 600px) {
  .airplane {
    margin-left: 23px;
    background-size: contain;
    object-fit: contain;
  }
}

@media (min-width: 360px) {
  .second-cloud {
    width: 75%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 80px;
  }
}

@media (min-width: 600px) {
  .second-cloud {
    width: 60%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 80px;
    margin-bottom: 90px;
  }
}

.third-cloud {
  width: 150px;
  background-repeat: no-repeat;
  background-size: contain;
  height: 90px;
}

.fourth-cloud {
  width: 135px;
  background-repeat: no-repeat;
  background-size: contain;
  height: 70px;
  align-self: flex-start;
}
.content-on-mobile {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 60px;
}
.content-on-desktop {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>