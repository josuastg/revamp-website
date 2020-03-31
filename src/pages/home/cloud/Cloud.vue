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
        backgroundImage: `url(${require("../../../assets/suncloud.png")})`
      },
      firstitem: {
        backgroundImage: `url(${require("../../../assets/secondcloud.png")})`
      },
      seconditem: {
        backgroundImage: `url(${require("../../../assets/thirdcloud.png")})`
      },
      thirditem: {
        backgroundImage: `url(${require("../../../assets/airplane.png")})`
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
@import "./cloud.css";
</style>