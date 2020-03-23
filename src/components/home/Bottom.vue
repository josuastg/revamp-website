<template>
  <div class="bottom">
    <p class="text">@ 2020 All Rights Reserved - Lion Parcel</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
.bottom {
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  flex-direction: column;
  height: 35px;
  background-image: linear-gradient(to top, #f3f3f3, #ffffff);
}
.text {
  font-weight: bold;
  object-fit: contain;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  line-height: normal;
  letter-spacing: normal;
  color: #1a1421;
}
</style>