<template>
  <div>
    <section class="section-content">
      <div class="claim-success-content">
        <div class="left-leaf">
          <div class="green-leaf" :style="greenLeaf">
            <div class="purple-leaf" :style="purpleLeaf"></div>
          </div>
          <div class="ellipse" :style="ellipse" />
        </div>
        <div class="container">
          <section class="section-content">
            <div class="claim-success">
              <p class="title-claim-success">Terima kasih telah menghubungi Lion Parcel</p>
              <p class="subtitle-claim-success">Klaim Anda akan diproses dalam 1x24 jam</p>
              <img src="../../assets/claim_success.png" class="claim-success-logo" />
              <div class="text-claim" v-if="isDesktop()">
                <p class="text-claim-tracking">Gunakan ID Klaim</p>
                <p class="text-id-claim-tracking">2312321</p>
                <p class="text-claim-tracking">untuk pelacakan klaim</p>
              </div>
              <div class="text-claim-on-mobile" v-if="isMobile()">
                <p class="text-claim-tracking">Gunakan ID Klaim  <p class="text-id-claim-tracking">2312321</p>
                <p class="text-claim-tracking">untuk pelacakan klaim</p>
              </div>
              <div class="content-btn-claim-success" @click="navigateToHome">
                <button class="button is-danger is-outlined">
                  <p class="btn-claim-success">Back to home</p>
                </button>
              </div>
            </div>
          </section>
        </div>
        <div class="right-leaf">
          <img src="../../assets/right_leaf.png" class="red-leaf" />
        </div>
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
import Border from "../../components/border/Border";
import Footer from "../../components/footer/Footer";
import Bottom from "../../components/bottom/Bottom";
export default {
  components: {
    "app-border": Border,
    "app-footer": Footer,
    "app-bottom": Bottom
  },
  data() {
    return {
      greenLeaf: {
        backgroundImage: `url(${require("../../assets/green_leaf.png")})`
      },
      purpleLeaf: {
        backgroundImage: `url(${require("../../assets/purple_leaf.png")})`
      },
      ellipse: {
        backgroundImage: `url(${require("../../assets/ellipse.png")})`
      },
      redLeaf: {
        backgroundImage: `url(${require("../../assets/red_leaf.png")})`
      },
      secondRedLeaf: {
        backgroundImage: `url(${require("../../assets/second_red_leaf.png")})`
      }
    };
  },
  methods: {
    created() {
      window.addEventListener("resize", this.isMobile);
      this.isMobile();
      this.isDesktop();
    },
    destroyed() {
      window.addEventListener("resize", this.isMobile);
    },
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
    },
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
@import "./claimsuccess.css";
</style>