<template>
  <div class="style-card">
    <div class="columns">
      <div class="column">
        <div class="margin-card">
          <div class="card">
            <div class="card-content">
              <div class="content-reason-card">
                <div class="content-image">
                  <img src="../../../assets/courier.png" class="img" />
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
                  <img src="../../../assets/truck.png" class="second-img" />
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
                  <img src="../../../assets/money.png" class="three-img" />
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
      images: [{ one: "../../../assets/courier.png" }]
    };
  },
  methods: {}
};
</script>

<style scoped>
@import "./reasoncard.css";
</style>