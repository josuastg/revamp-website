<template>
  <!-- <div class="container"> -->
    <div class="style-download">
      <p class="download">Download Our Apps</p>
      <p class="sub-download">Send packages through your phone and track your shipment</p>
      <div class="store">
        <img src="../../assets/playstore.png" class="img-store" />
        <img src="../../assets/appstore.png" class="img-store" />
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {};
</script>

<style scoped>
.download {
  font-size: 24px;
  font-weight: 600;
  font-style: normal;
  color: #d11f40;
}
.sub-download {
  object-fit: contain;
  font-size: 14px;
  width: 300px;
  height: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.style-download {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.store {
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
}
.img-store{
  width: 104px;
  height: 30px;
  object-fit: contain;
}
</style>