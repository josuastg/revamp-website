<template>
  <div class="container">
    <div class="content">
      <div class="container">
        <div class="level">
          <div class="level-right">
            <div :style="item" class="img-cloud">
              <p
                class="text-promo"
              >Fastest and Reaching all corners of Indonesia, using our own airplane</p>
              <p
                class="sub-text-promo"
              >With Lion Parcel, you can send packages to all corners of Indonesia supported by Lion Air's Fleet</p>
              <p class="sub-text-promo">without worrying about waiting too long</p>
            </div>
          </div>
          <div class="level-left">
            <app-airplane-logo></app-airplane-logo>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AirplaneLogo from "./AirplaneLogo";
export default {
  components: {
    "app-airplane-logo": AirplaneLogo
  },
  data() {
    return {
      item: {
        backgroundImage: `url(${require("../../assets/suncloud.png")})`
      }
    };
  }
};
</script>

<style scoped>
.content {
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
}
.img-cloud {
  max-width: 100%;
  margin: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  height: 150px;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
}
.text-promo {
  max-width: 100%;
  object-fit: contain;
  font-size: 18px;
  text-align: left;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  /* padding-left: 40px; */
  color: #d11f40;
}
.sub-text-promo {
  object-fit: contain;
  font-size: 14px;
  max-width: 100%;
  text-align: left;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #1a1421;
  /* padding-left: 40px; */
}
</style>