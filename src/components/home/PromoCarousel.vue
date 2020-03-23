<template>
  <div class="content-carousel">
    <div class="promo-card" :style="item">
      <div class="subtract-card" :style="secondItem">
        <div class="inside-content">
          <div class="left-content">
            <p class="promo-title">PROMO SHOK</p>
            <p class="discount">50 %</p>
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
  width: 230px;
  height: 140px;
  display: flex;
  background-size: contain;
  background-repeat: no-repeat;
  object-fit: contain;
  flex-direction: row;
  justify-content: center;
}
.subtract-card {
  width: 220px;
  display: flex;
  height: 125px;
  align-self: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.content-carousel {
  display: flex;
  justify-content: center;
}

.promo-title {
  color: #ffffff;
  font-size: 13px;
  text-align: center;
  margin-left: 12px;
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
  font-size: 30px;
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
  padding: 12px;
}

.right-content {
  display: flex;
  margin-left: 5px;
  flex-direction: column;
  justify-content: center;
}

.inside-content {
  display: flex;
  flex-direction: row;
}
</style>