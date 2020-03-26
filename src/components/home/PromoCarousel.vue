<template>
  <div class="content-carousel">
    <div class="promo-card" :style="item">
      <div class="subtract-card" :style="secondItem">
        <div class="inside-content">
          <div class="left-content">
            <p class="promo-title">PROMO SHOK</p>
            <p class="discount">50%</p>
          </div>
          <div class="right-content">
            <p class="promo-title">
              <b>Ongkir</b>
              <br />minimal
              <br />50kg
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        backgroundImage: `url(${require("../../assets/card.png")})`
      },
      secondItem: {
        backgroundImage: `url(${require("../../assets/subtract.png")})`
      }
    };
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
.promo-card {
  width: 290px;
  height: 140px;
  background-size: contain;
  background-repeat: no-repeat;
  object-fit: contain;
  flex-direction: row;
  display: flex;
  background-position: center;
  justify-content: center;
}
.subtract-card {
  width: 265px;
  height: 155px;
  display: flex;
  justify-content: center;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.content-carousel {
  display: flex;
  justify-content: center;
}

.promo-title {
  color: #ffffff;
  font-size: 15px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  object-fit: contain;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.discount {
  color: #ffffff;
  font-size: 40px;
  text-align: right;
  font-weight: bold;
  object-fit: contain;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.left-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 10px;
  margin-top: 15px;
  /* padding-right: 12px; */
}

.right-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
}

.inside-content {
  display: flex;
  flex-direction: row;
}
</style>