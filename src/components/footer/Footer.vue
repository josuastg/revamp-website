<template>
  <div class="content">
    <div class="footer-content">
      <div class="columns">
        <div class="column">
          <p class="footer-title" v-if="isDesktop()">Lion Parcel</p>
          <div class="content-on-mobile" v-if="isMobile()">
            <p class="footer-title">Lion Parcel</p>
            <div v-if="isMobile()">
              <p class="footer-title">Ikuti Kami</p>
              <div class="social">
                <img src="../../assets/twitter.png" class="social-media" />
                <img src="../../assets/fb.png" class="social-media" />
                <img src="../../assets/instagram.png" class="social-media" />
              </div>
            </div>
          </div>
          <div class="content-subtitle">
            <br />
            <p class="footer-subtitle">Tentang Kami</p>
            <p class="footer-subtitle">Faq</p>
            <p class="footer-subtitle">Karir</p>
            <p class="footer-subtitle">Komunitas</p>
          </div>
        </div>
        <div class="column">
          <p class="footer-title">Kontak Kami</p>
          <div class="content-subtitle">
            <div class="content-icon">
              <img src="../../assets/locPin.png" class="icons" />
              <p class="footer-subtitle">
                Head Office
                <br />Jl. Agave Raya No. 55
                <br />Kedoya Selatan,
                <br />Jakarta Barat 11520
              </p>
            </div>
            <div class="content-icon">
              <img src="../../assets/phone.png" class="icons" />
              <p class="footer-subtitle">
                <b>Office</b>
                <br />+62-21-580939
              </p>
            </div>
            <div class="content-icon">
              <div class="customer-service">
                <p class="footer-subtitle">
                  <b>Customer Service</b>
                  <br />+62-21-22580868
                  <br />+62-21-80820072
                </p>
              </div>
            </div>
            <div class="content-icon">
              <img src="../../assets/mail.png" class="icons" />
              <p class="footer-subtitle">
                customercare
                <br />@lionparcel.com
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <br />
          <p class="footer-title"></p>
          <div class="content-icon">
            <img src="../../assets/clock.png" class="icons" />
            <p class="footer-subtitle">
              Monday to Sunday
              <br />07:00 AM to 23:00 PM
            </p>
          </div>
        </div>
        <div class="column" v-if="isDesktop()">
          <p class="footer-title">Ikuti Kami</p>
          <div class="social">
            <img src="../../assets/twitter.png" class="social-media" />
            <img src="../../assets/fb.png" class="social-media" />
            <img src="../../assets/instagram.png" class="social-media" />
          </div>
        </div>
        <div class="column">
          <p class="getapp">Dapatkan Aplikasinya</p>
          <div class="img-content">
            <img src="../../assets/playstore.png" class="img-playstore" />
            <img src="../../assets/appstore.png" class="img-appstore" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener("resize", this.isMobile, this.isDesktop);
    this.isMobile();
    this.isDesktop();
  },
  destroyed() {
    window.addEventListener("resize", this.isMobile, this.isDesktop);
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
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
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
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
@import "./footer.css";
</style>