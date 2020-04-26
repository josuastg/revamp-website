<template>
  <div>
    <section class="section-content">
      <div class="bg-detail-check-price" :style="item" v-if="isDesktop()">
        <div class="content-breadcrumb-detail-check">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="/">
                  <img src="../../../assets/home.png" class="icon-home" />
                </a>
              </li>
              <li class="is-active">
                <a href="/tariff" aria-current="page" class="route-breadcrumb">Tarif</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="bg-detail-check-price-mobile" :style="secondItem" v-if="isMobile()"></div>
    </section>
    <div class="shipping-content-detail-price">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <p class="check-tarif">Cek Tarif</p>
            <div class="columns">
              <div class="column">
                <p class="ship-title-detail">Kota Asal</p>
                <div class="content-select">
                  <v-select
                    label="name"
                    :filterable="false"
                    @search="onSearchOrigin"
                    :options="listOrigin"
                    :reduce="listOrigin => listOrigin.Name"
                    v-model="origin"
                    placeholder="Masukkan alamat kota asal"
                  >
                    <template slot="no-options">Masukkan alamat kota asal...</template>
                    <template slot="option" slot-scope="option">
                      <div class="d-center">{{ option.Name}}</div>
                    </template>
                    <template slot="selected-option" slot-scope="option">
                      <div class="selected d-center">{{ option.Name}}</div>
                    </template>
                  </v-select>
                </div>
              </div>

              <div class="column">
                <p class="ship-title-detail">Kota Tujuan</p>
                <div class="content-select">
                  <v-select
                    label="name"
                    :filterable="false"
                    @search="onSearchDestination"
                    :options="listDestination"
                    :reduce="listDestination => listDestination.Name"
                    v-model="destination"
                    placeholder="Masukkan alamat kota tujuan"
                  >
                    <template slot="no-options">Masukkan alamat kota Tujuan...</template>
                    <template slot="option" slot-scope="option">
                      <div class="d-center">{{ option.Name}}</div>
                    </template>
                    <template slot="selected-option">
                      <div class="selected d-center">{{ DESTINATION}}</div>
                    </template>
                    <template slot="selected-option" slot-scope="option">
                      <div class="selected d-center">{{ option.Name}}</div>
                    </template>
                  </v-select>
                </div>
              </div>
              <div class="column">
                <p class="ship-title">Berat Paket</p>
                <div class="custom-input-weight">
                  <input
                    type="number"
                    placeholder="Masukan berat paket (max.100kg)"
                    min="1"
                    max="100"
                    v-model="weight"
                  />
                </div>
              </div>
              <div class="level">
                <div class="btn">
                  <button
                    @click="getTariff()"
                    class="button is-danger"
                    :disabled="origin === '' ||destination === '' ||weight === null "
                  >
                    <p class="title">Cek Tarif</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-content">
      <div id="content-pack-card">
        <div v-if="this.CHECK_PRICE.error_code === undefined"></div>
        <div class="not-found" v-else>
          <div class="content-check-price-not-found">
            <div :style="bg_check_price_not_found" class="bg-check-price-not-found">
              <img
                class="img-check-price-not-found"
                src="../../../assets/check_price_not_found.png"
              />
            </div>
          </div>
          <p class="text-check-price-not-found">Mohon Maaf Tarif Belum Tersedia</p>
        </div>
        <div class="columns">
          <div v-for="(price , index) in CHECK_PRICE.result" v-bind:key="index">
            <div v-if="price.service_type === 'PACKAGE'">
              <div class="column" v-if="price.product ===  'REGPACK' ">
                <div
                  class="pack-card-promo"
                  :style="card_promo_regpack"
                  v-if="price.total_normal_tariff > price.total_basic_tariff"
                >
                  <div class="bubble-content">
                    <img src="../../../assets/bubble_question.png" class="bubble-icon" />
                    <span class="tooltiptext">Pengiriman reguler</span>
                  </div>
                  <img src="../../../assets/icon_regpack.png" class="icon-pack" />
                  <p class="strikethrough-text">Rp. {{price.total_normal_tariff}}</p>
                  <p
                    class="title-pack"
                    v-if="price.total_normal_tariff > price.total_basic_tariff"
                  >Rp. {{price.total_basic_tariff}}</p>
                  <p
                    class="title-pack"
                    v-else-if="price.total_normal_tariff < price.total_basic_tariff"
                  >Rp. {{price.total_normal_tariff}}</p>
                  <p class="subtitle-pack">{{price.ETD}} hari kerja</p>
                </div>
                <div
                  class="pack-card"
                  :style="regpack"
                  v-else-if="price.total_normal_tariff < price.total_basic_tariff"
                >
                  <div class="bubble-content">
                    <img src="../../../assets/bubble_question.png" class="bubble-icon" />
                    <span class="tooltiptext">Pengiriman reguler</span>
                  </div>
                  <img src="../../../assets/icon_regpack.png" class="icon-pack" />
                  <p
                    class="title-pack"
                    v-if="price.total_normal_tariff < price.total_basic_tariff"
                  >Rp. {{price.total_basic_tariff}}</p>
                  <p
                    class="title-pack"
                    v-else-if="price.total_normal_tariff > price.total_basic_tariff"
                  >Rp. {{price.total_normal_tariff}}</p>
                  <p class="subtitle-pack">{{price.ETD}} hari kerja</p>
                </div>
              </div>
              <div class="column" v-if="price.product === 'ONEPACK'">
                <div
                  class="pack-card-promo"
                  :style="card_promo_onepack"
                  v-if="price.total_normal_tariff > price.total_basic_tariff"
                >
                  <div class="bubble-content">
                    <img src="../../../assets/bubble_question.png" class="bubble-icon" />
                    <span class="tooltiptext">Pengiriman 1 x 24 jam</span>
                  </div>
                  <img src="../../../assets/icon_onepack.png" class="icon-pack" />
                  <p class="strikethrough-text">{{price.total_normal_tariff}}</p>

                  <p
                    class="title-pack"
                    v-if="price.total_normal_tariff > price.total_basic_tariff"
                  >Rp. {{price.total_basic_tariff}}</p>
                  <p
                    class="title-pack"
                    v-else-if="price.total_normal_tariff < price.total_basic_tariff"
                  >Rp. {{price.total_normal_tariff}}</p>
                  <p class="subtitle-pack">1 hari sampai</p>
                </div>
                <div
                  class="pack-card"
                  :style="onepack"
                  v-else-if="price.total_normal_tariff < price.total_basic_tariff"
                >
                  <div class="bubble-content">
                    <img src="../../../assets/bubble_question.png" class="bubble-icon" />
                    <span class="tooltiptext">Pengiriman 1 x 24 jam</span>
                  </div>
                  <img src="../../../assets/icon_onepack.png" class="icon-pack" />
                  <p
                    class="title-pack"
                    v-if="price.total_normal_tariff < price.total_basic_tariff"
                  >Rp. {{price.total_basic_tariff}}</p>
                  <p
                    class="title-pack"
                    v-else-if="price.total_normal_tariff > price.total_basic_tariff"
                  >Rp. {{price.total_normal_tariff}}</p>
                  <p class="subtitle-pack">1 hari sampai</p>
                </div>
              </div>
              <div class="column" v-if="price.product === 'LANDPACK'">
                <div
                  class="pack-card-promo"
                  :style="card_promo_landpack"
                  v-if="price.total_normal_tariff > price.total_basic_tariff"
                >
                  <div class="bubble-content">
                    <img src="../../../assets/bubble_question.png" class="bubble-icon" />
                    <span class="tooltiptext">Pengiriman pake kereta</span>
                  </div>
                  <img src="../../../assets/icon_landpack.png" class="icon-pack" />
                  <p class="strikethrough-text">{{price.total_normal_tariff}}</p>
                  <p
                    class="title-pack"
                    v-if="price.total_normal_tariff > price.total_basic_tariff"
                  >Rp. {{price.total_basic_tariff}}</p>
                  <p
                    class="title-pack"
                    v-else-if="price.total_normal_tariff < price.total_basic_tariff"
                  >Rp. {{price.total_normal_tariff}}</p>
                  <p class="subtitle-pack">{{price.ETD}} hari kerja</p>
                </div>
                <div
                  class="pack-card"
                  :style="landpack"
                  v-else-if="price.total_normal_tariff < price.total_basic_tariff"
                >
                  <div class="bubble-content">
                    <img src="../../../assets/bubble_question.png" class="bubble-icon" />
                    <span class="tooltiptext">Pengiriman pake kereta</span>
                  </div>
                  <img src="../../../assets/icon_landpack.png" class="icon-pack" />
                  <p
                    class="title-pack"
                    v-if="price.total_normal_tariff < price.total_basic_tariff"
                  >Rp. {{price.total_basic_tariff}}</p>
                  <p
                    class="title-pack"
                    v-else-if="price.total_normal_tariff > price.total_basic_tariff"
                  >Rp. {{price.total_normal_tariff}}</p>
                  <p class="subtitle-pack">{{price.ETD}} hari kerja</p>
                </div>
              </div>
              <div class="column" v-if="price.product === 'INTERPACK'">
                <div class="pack-card" :style="interpack">
                  <div class="bubble-content">
                    <img src="../../../assets/bubble_question.png" class="bubble-icon" />
                    <span class="tooltiptext">Pengiriman luar negeri</span>
                  </div>
                  <img src="../../../assets/icon_interpack.png" class="icon-pack" />
                  <p
                    class="title-pack"
                    v-if="price.total_normal_tariff < price.total_basic_tariff"
                  >Rp. {{price.total_basic_tariff}}</p>
                  <p
                    class="title-pack"
                    v-else-if="price.total_normal_tariff > price.total_basic_tariff"
                  >Rp. {{price.total_normal_tariff}}</p>
                  <p class="subtitle-pack">{{price.ETD}} Minggu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <app-border></app-border>
    <section class="section">
      <app-footer id="contact"></app-footer>
    </section>
    <app-bottom></app-bottom>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import Border from "../../../components/border/Border";
import Footer from "../../../components/footer/Footer";
import Bottom from "../../../components/bottom/Bottom";
export default {
  name: "detail-shipment-page",
  components: {
    "app-border": Border,
    "app-footer": Footer,
    "app-bottom": Bottom
  },
  data() {
    return {
      origin: "",
      destination: "",
      weight: null,
      listOrigin: [],
      listDestination: [],
      showInputOrigin: true,
      showSelectOrigin: false,
      showInputDestination: true,
      showSelectDestination: false,
      showAlert: false,
      message: "",
      validateExist: "",
      item: {
        backgroundImage: `url(${require("../../../assets/bg_detail_check_price.png")})`
      },
      secondItem: {
        backgroundImage: `url(${require("../../../assets/bg_detail_check_price_mobile.png")})`
      },
      regpack: {
        backgroundImage: `url(${require("../../../assets/regpack.png")})`
      },
      onepack: {
        backgroundImage: `url(${require("../../../assets/onepack.png")})`
      },
      landpack: {
        backgroundImage: `url(${require("../../../assets/landpack.png")})`
      },
      interpack: {
        backgroundImage: `url(${require("../../../assets/interpack.png")})`
      },
      card_promo_regpack: {
        backgroundImage: `url(${require("../../../assets/card_promo_regpack.png")})`
      },
      card_promo_onepack: {
        backgroundImage: `url(${require("../../../assets/card_promo_onepack.png")})`
      },
      card_promo_landpack: {
        backgroundImage: `url(${require("../../../assets/card_promo_landpack.png")})`
      },
      bg_check_price_not_found: {
        backgroundImage: `url(${require("../../../assets/bg_check_price_not_found.png")})`
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
  mounted() {
    window.scrollTo(0, 0);
  },
  beforeMount() {
    this.origin = this.ORIGIN;
    (this.destination = this.DESTINATION), (this.weight = this.WEIGHT);
    this.getBeforeOrigin();
    this.getBeforeDestination();
  },
  computed: {
    ...mapGetters(["CHECK_PRICE", "ORIGIN", "DESTINATION", "WEIGHT"])
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
    },
    onSearchOrigin(search, loading) {
      loading(false);
      this.getOrigin(loading, search);
      loading(false);
    },
    onSearchDestination(search, loading) {
      loading(false);
      this.getDestination(loading, search);
    },
    getOrigin(loading, search) {
      axios
        .get(`/routes/origin/${search}`)
        .then(res => {
          this.listOrigin = res.data;
          loading(false);
        })
        .catch(err => {
          console.log((this.message = err.message));
        });
    },
    getDestination(loading, search) {
      axios
        .get(`/routes/destination/${search}`)
        .then(res => {
          this.listDestination = res.data;
          loading(false);
        })
        .catch(err => {
          console.log((this.message = err.message));
        });
    },
    getBeforeOrigin() {
      axios
        .get(`/routes/origin/${this.origin}`)
        .then(res => {
          this.listOrigin = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getBeforeDestination() {
      axios
        .get(`/routes/destination/${this.destination}`)
        .then(res => {
          this.listDestination = res.data;
        })
        .catch(err => {
          console.log((this.message = err));
        });
    },
    getTariff() {
      const payload = {
        origin: this.origin,
        destination: this.destination,
        weight: Number(this.weight)
      };
      this.initCheckPrice(payload);
    },
    ...mapActions(["initCheckPrice"])
  }
};
</script>

<style scoped>
@import "./detailcheckprice.css";
</style>