<template>
  <div class="style-card">
    <div class="columns">
      <div class="column">
        <div class="margin-card">
          <div class="card">
            <div class="card-content">
              <div class="content-reason-card">
                <div class="content-image">
                  <div :style="courier" class="img"></div>
                </div>
                <div class="desc">
                  <p class="reason-card-title">Gratis Jemput</p>
                  <p
                    class="reason-card-subtitle"
                  >Tidak perlu repot ke kantor kami, paket Anda akan dijemput oleh kurir terdekat dan dikirim ke tujuan pengiriman.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="margin-card">
          <div class="card">
            <div class="card-content">
              <div class="content-reason-card">
                <div class="content-image">
                  <div class="second-img" :style="truck"></div>
                </div>
                <div class="desc">
                  <p class="reason-card-title">Lacak Pengiriman</p>
                  <p class="reason-card-subtitle">Lacak pengiriman kamu kapanpun dan dimanapun.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="margin-card">
          <div class="card">
            <div class="card-content">
              <div class="content-reason-card">
                <div class="content-image">
                  <div :style="money" class="three-img"> </div>
                </div>
                <div class="desc">
                  <p class="reason-card-title">Hemat Rp 0000</p>
                  <p
                    class="reason-card-subtitle"
                  >Kirim paket sebanyak yang Anda inginkan tanpa takut akan pengiriman mahal.</p>
                </div>
              </div>
            </div>
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
      courier: {
        backgroundImage: `url(${require("../../../assets/courier.png")})`
      },
      truck: {
        backgroundImage: `url(${require("../../../assets/truck.png")})`
      },
       money: {
        backgroundImage: `url(${require("../../../assets/money.png")})`
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
@import "./reasoncard.css";
</style>