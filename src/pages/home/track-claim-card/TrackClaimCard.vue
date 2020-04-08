<template>
  <div class="cards">
    <p class="track">Lacak Pengiriman Anda</p>
    <!-- <img src="../../../assets/question.png" class="img-question" /> -->

    <div class="content-track">
      <div class="card">
        <div class="card-content">
          <div class="add-input">
            <div class="content-input" v-for="(track, index) in tracks" v-bind:key="index">
              <div class="custom-input">
                <input type="text" placeholder="Masukan nomor pengiriman" />
                <img
                  src="../../../assets/close.png"
                  class="close"
                  @click.prevent="deleteInput(index)"
                  v-show="showLogo"
                />
              </div>
            </div>
          </div>
          <p class="sub-track" @click.prevent="newInput" v-show="show">+Tambah</p>
          <div class="btn-track-home">
            <div  @click="clearInput()">
            <app-white-button title="Cancel" v-show="showCancel"></app-white-button>
            </div>
            <router-link :to="{name : 'trackShipment', query:{q: 12312}}">
              <app-red-button title="Lacak"></app-red-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
    <p class="track-claim">Klaim</p>
    <div class="content-track">
      <div class="card">
        <div class="card-content">
          <input class="input" type="text" placeholder="Masukan nomor klaim" v-model="claim_id" />
          <p class="sub-track" @click="navigateToNewClaim">Buat Klaim</p>
          <div class="btn-claim-home">
            <router-link :to="{name: 'detailClaim' ,query:{ q : claim_id}}">
              <app-red-button title="Kirim"></app-red-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RedButton from "../../../components/button/RedButton";
import WhiteButton from "../../../components/button/WhiteButton";
export default {
  components: {
    "app-red-button": RedButton,
    "app-white-button": WhiteButton
  },
  data() {
    return {
      tracks: [""],
      show: true,
      showLogo: false,
      showCancel: false,
      claim_id: null
    };
  },
  methods: {
    newInput(track) {
      if (this.tracks.length === 5) {
        this.show = false;
        this.showCancel = true;
        alert("only track 5 shipment");
      } else {
        if (this.tracks.length === 1) {
          this.showCancel = true;
          this.showLogo = true;
        } else if (this.tracks.length === 1) {
          this.showCancel = false;
        } else this.showLogo = true;
        this.showInput = false;
        this.tracks.push(track);
      }
    },
    clicked() {
      alert("clicked");
    },
    deleteInput(index) {
      if (this.tracks.length === 1) {
        this.showLogo = false; //erase image
        this.showCancel = false;
        return true;
      } else {
        this.show = true;
        this.tracks.splice(index, 1);
      }
    },
    clearInput() {
      this.tracks = [""];
      this.show = true;
      this.showLogo = false;
      this.showCancel = false;
    },
    showLogos() {
      this.showLogo = false;
    },
    navigateToDetailClaim() {
      this.$router.push("/claim/123");
    },
    navigateToNewClaim() {
      this.$router.push("/claim");
    }
  }
};
</script>
  
<style  scoped>
@import "./trackclaim.css";
</style>