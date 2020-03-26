<template>
  <div class="container">
    <div :style="item" class="img-cloud" v-if="isDesktop()">
      <div class="promo">
        <p class="text-promo">
          Tercepat dan Menjangkau seluruh pelosok Indonesia,
          menggunakan pesawat kami sendiri
        </p>
        <p class="sub-text-promo">
          Dengan Lion Parcel, Anda dapat mengirim paket ke seluruh pelosok Indonesia yang didukung oleh Lion Air's Fleet,
          tanpa khawatir menunggu terlalu lama
        </p>
      </div>
    </div>
    <div class="promo" v-if="isMobile()">
      <p class="text-promo">
        Tercepat dan Menjangkau seluruh pelosok Indonesia,
        menggunakan pesawat kami sendiri
      </p>
      <p class="sub-text-promo">
        Dengan Lion Parcel, Anda dapat mengirim paket ke seluruh pelosok Indonesia yang didukung oleh Lion Air's Fleet,
        tanpa khawatir menunggu terlalu lama
      </p>
    </div>
  </div>
</template>

<script>
// import AirplaneLogo from "./AirplaneLogo";
export default {
  components: {
    // "app-airplane-logo": AirplaneLogo
  },
  data() {
    return {
      item: {
        backgroundImage: `url(${require("../../assets/suncloud.png")})`
      },
      firstitem: {
        backgroundImage: `url(${require("../../assets/secondcloud.png")})`
      },
      seconditem: {
        backgroundImage: `url(${require("../../assets/thirdcloud.png")})`
      },
      thirditem: {
        backgroundImage: `url(${require("../../assets/airplane.png")})`
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
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

.content {
  flex-direction: column;
  display: flex;
}
@media (min-width: 360px) {
  .img-cloud {
    max-width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 120px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 600px) {
  .img-cloud {
    width: 700px;
    background-repeat: no-repeat;
    background-size: contain;
    height: 120px;
    display: flex;
    justify-content: center;
  }
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
  color: #d11f40;
}
.sub-text-promo {
  font-family: "Poppins", sans-serif;
  object-fit: contain;
  font-size: 12px;
  max-width: 80%;
  text-align: left;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #1a1421;
}

.promo {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 12px;
}
</style>