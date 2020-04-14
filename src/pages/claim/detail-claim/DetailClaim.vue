<template>
  <div>
    <section class="section-content">
      <div class="bg-detail-check-claim" :style="item" v-if="isDesktop()">
        <div class="content-breadcrumb">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="/">
                  <img src="../../../assets/home.png" class="icon-home" />
                </a>
              </li>
              <li class="is-active">
                <a href="/claim" aria-current="page" class="route-breadcrumb">Claim</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="bg-detail-check-claim-mobile" :style="secondItem" v-if="isMobile()"></div>
    </section>
    <div id="shipping-content-detail">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <p class="check-tarif">Klaim Paket</p>
            <div class="columns">
              <div class="column">
                <p class="ship-title-claim-detail">Input your claim number</p>
                <input
                  class="input"
                  type="text"
                  placeholder="Masukan nomor claim"
                  :value="$route.query.q"
                />
                <p
                  class="claim-information"
                >*Nomor klaim didapat dari saat pengajuan klaim / sms notifikasi dari Lion Parcel.</p>
              </div>
              <div class="level">
                <div class="btn-track" @click.prevent="counting">
                  <app-red-button title="Kirim"></app-red-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-content">
      <div class="content-result-claim">
        <p id="title-search-result-claim">Hasil pencarian No. Claim 259317</p>
        <p class="subtitle-search-result-claim">Klaim Anda telah diproses, bukti transfer di bawah.</p>
        <div class="shipping-content-result-claim">
          <div class="container">
            <section class="section-content">
              <div class="card" v-show="found">
                <div class="card-content">
                  <img src="../../../assets/example_result_claim.png" v-if="isDesktop()" />
                  <img src="../../../assets/example_result_claim_mobile.png" v-if="isMobile()" />
                  <div class="content-icon-download">
                    <img src="../../../assets/download.png" class="icon-download" />
                  </div>
                </div>
              </div>
              <div class="claim-result" v-show="notfound">
                <div class="img-result">
                  <img src="../../../assets/claim_not_found.png" class="claim-not-found" />
                </div>
                <p class="text-result">Ups..claim No. 259317 not found</p>
              </div>
              <div class="claim-result" v-show="proses">
                <div class="img-result">
                  <img src="../../../assets/process_claim.png" class="process-claim" />
                </div>
                <p class="text-result">Tunggu .. Klaim Anda sedang diproses</p>
              </div>
            </section>
          </div>
        </div>
        <section class="section-content">
          <div class="content-btn-new-claim" v-show="btnClaim">
            <button class="button is-danger is-outlined" @click="navigateToClaim">
              <p class="btn-create-claim">Buat Klaim Baru</p>
            </button>
          </div>
        </section>
      </div>
    </section>
    <app-border></app-border>
    <section class="section">
      <app-footer></app-footer>
    </section>
    <app-bottom></app-bottom>
  </div>
</template>

<script>
import Border from "../../../components/border/Border";
import Footer from "../../../components/footer/Footer";
import Bottom from "../../../components/bottom/Bottom";
import RedButton from "../../../components/button/RedButton";
export default {
  name: "detail-claim-card",
  components: {
    "app-border": Border,
    "app-footer": Footer,
    "app-bottom": Bottom,
    "app-red-button": RedButton
  },
  data() {
    return {
      item: {
        backgroundImage: `url(${require("../../../assets/bg_detail_claim.png")})`
      },
      secondItem: {
        backgroundImage: `url(${require("../../../assets/bg_claim_mobile.png")})`
      },
      count: 0,
      notfound: false,
      found: true,
      proses: false,
      showing: true,
      btnClaim: true,
      q: this.$route.query.q
    };
  },
  mounted() {
    document.getElementById("shipping-content-detail").scrollIntoView();
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
    counting() {
      this.count++;
      if (this.count === 1) {
        this.found = false;
        this.notfound = true;
        this.btnClaim = false;
        this.proses = false;
      } else if (this.count === 2) {
        this.found = false;
        this.notfound = false;
        this.btnClaim = false;
        this.proses = true;
      } else {
        this.found = true;
        this.notfound = false;
        this.btnClaim = true;
        this.proses = false;
      }
    },
    navigateToClaim() {
      this.$router.push("/claim");
    }
  }
};
</script>

<style scoped>
@import "./detailclaim.css";
</style>