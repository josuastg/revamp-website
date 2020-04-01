<template>
  <div>
    <section class="section-content">
      <div class="bg-detail-check-price" :style="item" v-if="isDesktop()">
        <div class="content-breadcrumb">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="/">
                  <img src="../../assets/home.png" class="icon-home" />
                </a>
              </li>
              <li class="is-active">
                <a href="/claim" aria-current="page" class="route-breadcrumb">Claim</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="bg-detail-check-price-mobile" :style="secondItem" v-if="isMobile()"></div>
    </section>
    <app-check-price-card></app-check-price-card>
    <section class="section-content">
      <div class="content-result-claim">
        <p class="title-search-result-claim">Hasil pencarian No. Claim 259317</p>
        <p
          class="subtitle-search-result-claim"
        >Klaim Anda telah diproses, bukti transfer di bawah.</p>
        <div class="shipping-content-result-claim">
          <div class="container">
            <section class="section-content">
              <div class="card">
                <div class="card-content">
                  <img src="../../assets/example_result_claim.png" v-if="isDesktop()" />
                  <img src="../../assets/example_result_claim_mobile.png" v-if="isMobile()" />
                  <div class="content-icon-download">
                    <img src="../../assets/download.png" class="icon-download" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section class="section-content">
          <div class="content-btn-new-claim">
            <button class="button is-danger is-outlined">
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
import ClaimCard from "./claim-card/ClaimCard";
import Border from "../../components/border/Border";
import Footer from "../../components/footer/Footer";
import Bottom from "../../components/bottom/Bottom";
export default {
  name: "detail-claim-card",
  components: {
    "app-check-price-card": ClaimCard,
    "app-border": Border,
    "app-footer": Footer,
    "app-bottom": Bottom
  },
  data() {
    return {
      item: {
        backgroundImage: `url(${require("../../assets/bg_detail_claim.png")})`
      },
      secondItem: {
        backgroundImage: `url(${require("../../assets/bg_claim_mobile.png")})`
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
@import "./detailclaim.css";
</style>