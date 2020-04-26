<template>
  <div class="cards">
    <p class="track">Lacak Pengiriman Anda Sekarang Disini</p>
    <div class="img-question-content">
      <img src="../../../assets/question.png" class="img-question" />
    </div>
    <div class="content-track">
      <div class="card">
        <div class="card-content">
          <div class="add-input">
            <div class="content-input" v-for="(trk, index) in tracks" v-bind:key="index">
              <div class="custom-input">
                <input
                  type="text"
                  placeholder="Masukan nomor pengiriman"
                  v-model.trim="trk.track"
                  @input="formatNumber(trk.track)"
                />
                <img
                  src="../../../assets/close.png"
                  class="close"
                  @click.prevent="deleteInput(index)"
                  v-show="showLogo"
                />
              </div>
            </div>
          </div>
          <p class="sub-track" @click="newInput" v-show="show">+Tambah</p>
          <div class="btn-track-home">
            <div @click="clearInput()">
              <app-white-button title="Cancel" v-show="showCancel"></app-white-button>
            </div>
            <button @click="getTrackShipment()" class="button is-danger">
              <p class="title">Lacak</p>
            </button>
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
import { mapActions, mapGetters } from "vuex";

import RedButton from "../../../components/button/RedButton";
import WhiteButton from "../../../components/button/WhiteButton";
export default {
  components: {
    "app-red-button": RedButton,
    "app-white-button": WhiteButton
  },
  data() {
    return {
      tracks: [{ track: null }],
      result_track: [],
      test: [],
      show: true,
      singleTrack: null,
      showLogo: false,
      showCancel: false,
      claim_id: null
    };
  },
  watch: {
    RESULT_TRACK(val) {
      console.log(" watch ", JSON.stringify(val));
      const query = this.tracks.map(key => {
        return key.track;
      });
      if (val) {
        this.$router.push({
          name: "trackShipment",
          query: { q: query }
        });
      }
    }
  },
  computed: {
    ...mapGetters(["RESULT_TRACK"]),
    formatNumber(value) {
      if (value.charAt(0)) {
        var foo = value
          .split("-")
          .join("")
          .replace(/[^0-9, ]/g, "")
          .replace(/(\..*)\./g, "$1");
        if (foo.length > 0) {
          if (foo.length <= 4)
            foo = foo.match(new RegExp(".{1,2}", "g")).join("-");
          else foo = foo.replace(/(\d{2})(\d{2})(\d{1,})/, "$1-$2-$3");
        }
      } else {
        foo = value;
      }
      return foo;
    }
  },
  methods: {
    newInput() {
      if (this.tracks.length === 5) {
        this.show = false;
        this.showCancel = true;
        alert("only track 5 shipment");
      } else {
        this.showLogo = true;
        this.showCancel = true;
        this.tracks.push({ track: null });
      }
    },

    deleteInput(index) {
      if (this.tracks.length === 2) {
        this.showLogo = false; //erase image
        this.showCancel = false;
        this.tracks.splice(index, 1);
        return true;
      } else {
        this.show = true;
        this.showCancel = true;
        this.tracks.splice(index, 1);
      }
    },
    clearInput() {
      this.tracks = [{ track: null }];
      this.show = true;
      this.showLogo = false;
      this.showCancel = false;
    },
    getTrackShipment() {
      const data = this.tracks.map(key => {
        return key.track;
      });
      const payload = {
        tracks: data
      };
      this.initTrackShipment(payload);
    },
    ...mapActions(["initTrackShipment"]),
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