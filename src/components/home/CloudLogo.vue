<template>
  <div class="container">
    <div class="content">
      <div class="container">
        <div class="level">
          <div class="level-right">
            <div :style="item" class="img-cloud">
              <p class="text-promo">
                Tercepat dan Menjangkau seluruh pelosok Indonesia,
                menggunakan pesawat kami sendiri
              </p>
              <p
                class="sub-text-promo"
              >Dengan Lion Parcel, Anda dapat mengirim paket ke seluruh pelosok Indonesia yang didukung oleh Lion Air's Fleet,</p>
              <p class="sub-text-promo"></p>
              <p class="sub-text-promo">tanpa khawatir menunggu terlalu lama</p>
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
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

.content {
  flex-direction: column;
  display: flex;
  justify-content: center;
}
.img-cloud {
  max-width: 100%;
  margin: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  height: 150px;
  flex-direction: column;
  display: flex;
  justify-content: center;
}
.text-promo {
  font-family: "Poppins", sans-serif;
  max-width: 100%;
  object-fit: contain;
  font-size: 16px;
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
  font-family: "Poppins", sans-serif;
  object-fit: contain;
  font-size: 12px;
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