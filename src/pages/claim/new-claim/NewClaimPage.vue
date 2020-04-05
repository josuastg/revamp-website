<template>
  <div>
    <section class="section-content" v-show="isDesktop()">
      <div class="container">
        <div class="content-breadcrumb-claim">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="/">
                  <img src="../../../assets/home.png" class="icon-home" />
                </a>
              </li>
              <li class="route-breadcrumb">
                <a href="/claim/259317" aria-current="page" class="is-active">Claim</a>
              </li>
              <li class="is-active">
                <a href="/claim" aria-current="page" class="route-breadcrumb">Create a New Claim</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <p class="title-form-claim" v-if="isDesktop()">Klaim Form</p>
    <section class="section-content" v-if="isMobile()">
      <div :style="bgNewClaimMobile" class="bg-detail-new-claim-mobile"></div>
    </section>
    <p class="title-form-claim" v-if="isMobile()">Klaim Form</p>

    <div class="new-claim-content">
      <div class="content-leaf">
        <!-- <img src="../../assets/left_leaf.png" class="green-leaf" /> -->
        <div class="green-leaf" :style="greenLeaf">
          <div class="purple-leaf" :style="purpleLeaf"></div>
        </div>
        <div class="ellipse" :style="ellipse" />
      </div>
      <app-claim-form></app-claim-form>

      <div class="second-content-leaf">
        <div class="red-leaf-mobile" :style="redLeaf" v-if="isMobile()">
          <div class="second-red-leaf-mobile" :style="secondRedLeaf" v-if="isMobile()"></div>
        </div>
        <img src="../../../assets/right_leaf.png" class="red-leaf-desktop" v-if="isDesktop()" />
      </div>
    </div>
    <app-border></app-border>
    <section class="section">
      <app-footer></app-footer>
    </section>
    <app-bottom></app-bottom>
    <div> 
    </div>
  </div>
</template>

<script>
import Border from "../../../components/border/Border";
import Footer from "../../../components/footer/Footer";
import Bottom from "../../../components/bottom/Bottom";
import ClaimForm from "./form-claim/FormClaim";
export default {
  components: {
    "app-border": Border,
    "app-footer": Footer,
    "app-bottom": Bottom,
    "app-claim-form": ClaimForm
  },
  data() {
    return {
      greenLeaf: {
        backgroundImage: `url(${require("../../../assets/green_leaf.png")})`
      },
      purpleLeaf: {
        backgroundImage: `url(${require("../../../assets/purple_leaf.png")})`
      },
      ellipse: {
        backgroundImage: `url(${require("../../../assets/ellipse.png")})`
      },
      redLeaf: {
        backgroundImage: `url(${require("../../../assets/red_leaf.png")})`
      },
      secondRedLeaf: {
        backgroundImage: `url(${require("../../../assets/second_red_leaf.png")})`
      },
      bgNewClaimMobile: {
        backgroundImage: `url(${require("../../../assets/bg_mobile_new_claim.png")})`
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
@import "./newclaimpage.css";
</style>