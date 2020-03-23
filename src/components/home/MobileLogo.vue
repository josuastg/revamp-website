<template>
  <!-- <div class="container"> -->
    <div class="content"> 
    <div class="img-logo" :style="item"/>
<!-- </div> -->
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
  width: 340px;
  height: 340px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  align-self: center;
}

.content{
  display: flex;
  flex-direction: row;
  justify-content: center;

}
</style>