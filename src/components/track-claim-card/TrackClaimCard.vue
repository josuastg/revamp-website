<template>
  <div class="cards">
    <p class="track">Lacak Pengiriman Anda</p>
    <div class="content-track">
      <div class="card">
        <div class="card-content">
          <div class="input-track">
            <div class="add-input">
              <div class="content-input" v-for="(track, index) in tracks" v-bind:key="track">
                <input class="input" type="search" placeholder="Masukan nomor pengiriman" />
                <img
                  src="../../assets/close.png"
                  class="close"
                  @click.prevent="deleteInput(index)"
                  v-show="showLogo"
                />
              </div>
            </div>
            <img src="../../assets/question.png" class="img-question" />
          </div>
          <p class="sub-track" @click.prevent="newInput" v-show="show">+Tambah</p>
          <div class="btn-track-claim">
            <app-red-button title="Lacak"></app-red-button>
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
    <p class="track-claim">Klaim</p>
    <div class="content-track">
      <div class="card">
        <div class="card-content">
          <input class="input" type="text" placeholder="Masukan nomor klaim" />
          <p class="sub-track">Buat Klaim</p>
          <div class="btn-track-claim">
            <app-red-button title="Kirim"></app-red-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RedButton from "../button/RedButton";
export default {
  components: {
    "app-red-button": RedButton
  },
  data() {
    return {
      tracks: [""],
      show: true,
      showLogo: false
    };
  },
  methods: {
    newInput(track) {
      if (this.tracks.length === 5) {
        this.show = false;
        alert("only track 5 shipment");
      } else {
        this.showLogo = true;
        this.tracks.push(track);
      }
    },
    deleteInput(index) {
      if (this.tracks.length === 1) {
        this.showLogo = false;
        return false;
      } else {
        this.show = true;
        this.tracks.splice(index, 1);
      }
    },
    showLogos() {
      this.showLogo = false;
    }
  }
};
</script>
  
<style  scoped>
@import "./trackclaim.css";
</style>