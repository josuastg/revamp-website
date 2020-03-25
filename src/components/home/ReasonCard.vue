<template>
  <div class="style-card">
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="content-image">
                <img src="../../assets/courier.png" class="img" />
              </div>
              <div class="desc">
                <p class="title">Gratis Jemput</p>
                <p
                  class="subtitle"
                >Tidak perlu repot ke kantor kami, paket Anda akan dijemput oleh kurir terdekat dan dikirim ke tujuan pengiriman.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="content-image">
                <img src="../../assets/truck.png" class="second-img" />
              </div>
              <div class="desc">
                <p class="title">Lacak Pengiriman</p>
                <p class="subtitle">Lacak pengiriman kamu kapanpun dan dimanapun.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="content-image">
                <img src="../../assets/money.png" class="three-img" />
              </div>
              <div class="desc">
                <p class="title">Hemat Rp 0000</p>
                <p
                  class="subtitle"
                >Kirim paket sebanyak yang Anda inginkan tanpa takut akan pengiriman mahal.</p>
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
  props: { url_image: String, title: String, subtitle: String },
  data() {
    return {
      images: [{ one: "../../assets/courier.png" }]
    };
  },
  methods: {
    // findImage(path) {
    //   let images = require.context('../../assets/', false, /\.png$|\.jpg$/);
    //   return images('./' +path);
    // }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

.content {
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin: 10px;
}
.img {
  width: 90px;
  height: 190px;
  background-repeat: no-repeat;
  background-size: contain;
}

.style-card {
  margin-left: 18px;
  margin-right: 18px;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.content-image {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.second-img {
  width: 140px;
  height: 190px;
  background-repeat: no-repeat;
  background-size: contain;
}

@media (min-width: 600px) {
  .three-img {
    width: 85px;
    height: 110px;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
@media (min-width: 360px) {
  .three-img {
    width: 180px;
    height: 100px;
    margin-top: 90px;
    display: flex;
    background-repeat: no-repeat;
    background-size: contain;
  }
}

.title {
  object-fit: contain;
  font-size: 18px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #d11f40;
}
.subtitle {
  object-fit: contain;
  font-size: 14px;
  font-weight: normal;
  font-family: "Poppins", sans-serif;
  font-stretch: normal;
  text-align: left;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1a1421;
}

.desc {
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
}

.money {
  width: 240px;
  height: 160px;
}
.container-card {
  justify-content: center;
  display: flex;
}
</style>