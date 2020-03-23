<template>
  <div class="container">
    <div class="content">
      <div :style="firstitem" class="second-cloud">
        <!-- <img src="../../assets/airplane.png" class="airplane" /> -->
        <img src="../../assets/airplane.png" class="airplane" />
      </div>
      <div :style="seconditem" class="third-cloud"></div>
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
      }
    };
  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.airplane {
  margin-left: 20px;
  background-size: contain;
  object-fit: contain;
}
.second-cloud {
  width: 300px;
  margin-top: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  margin-bottom: 80px;
}
.third-cloud {
  width: 140px;
  background-repeat: no-repeat;
  background-size: contain;
  height: 90px;
}
</style>