<template>
  <div class="container">
    <div class="content"> 
    <div class="img-logo" :style="item"/>
</div>
  </div>
</template>

<script>

export default {
  components: {
   
  },
  data() {
    return {
      item: {
        backgroundImage: `url(${require("../../assets/mobile_logo.png")})`
      }
    };
  }
};
</script>

<style scoped>
.img-logo {
  width: 380px;
  height: 320px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.content{
  display: flex;
  flex-direction: row;

}
</style>