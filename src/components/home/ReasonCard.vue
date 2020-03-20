<template>
  <div class="container">
    <p class="why-us">Why Us ?</p>
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <img src="../../assets/courier.png" class="img" />
              <div class="desc">
                <p class="title">Free Pick-Up</p>
                <p
                  class="subtitle"
                >No need to bother to our office, your package will be picked up by the nearest courier and delivered to the shipping destination.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <img src="../../assets/truck.png" class="second-img" />
              <div class="desc">
                <p class="title">Tracking Shipment</p>
                <p
                  class="subtitle"
                >Get an update for your package delivery status by using the tracking feature</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <img src="../../assets/money.png" class="three-img" />
              <div class="desc">
                <p class="title">Save Rp 0000</p>
                <p
                  class="subtitle"
                >Send as many packages as you want without fear of expensive shipping</p>
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
.content {
  justify-content: center;
  display: flex;
  flex-direction: row;
}
.img {
  width: 86px;
  height: 200px;
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  justify-content: center;
}

.second-img {
  width: 108px;
  height: 200px;
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  justify-content: center;
}
.three-img {
  width: 80px;
  height: 110px;
  margin-top: 90px;
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  justify-content: flex-end;
}
.title {
  object-fit: contain;
  font-size: 18px;
  font-weight: 600;
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
  font-stretch: normal;
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
.why-us {
  object-fit: contain;
  font-size: 18px;
  text-align: left;
  margin-left: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
</style>