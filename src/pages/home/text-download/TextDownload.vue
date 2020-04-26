<template>
  <div class="container">
    <div class="style-download">
      <p class="download">Unduh Aplikasi Lion Parcel</p>
      <p class="sub-download">Kirim paket melalui ponsel Anda dan lacak kiriman anda</p>
      <div class="store">
        <img src="../../../assets/playstore.png" class="img-store" @click="playstore" />
        <img src="../../../assets/appstore.png" class="img-store" @click="appstore" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    playstore() {
      window.open(
        "https://play.google.com/store/apps/details?id=com.lionparcel.services.consumer&hl=in"
      );
    },
    appstore() {
      window.open("https://apps.apple.com/id/app/lion-parcel/id1455977134");
    }
  }
};
</script>

<style scoped>
@import "./textdownload.css";
</style>