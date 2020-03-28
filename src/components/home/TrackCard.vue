<template>
  <div class="cards">
    <p class="track">Lacak Pengiriman Anda</p>
    <div class="content">
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
          <div class="btn">
            <app-red-button title="Lacak"></app-red-button>
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
    <p class="track-claim">Klaim</p>
    <div class="content">
      <div class="card">
        <div class="card-content">
          <input class="input" type="text" placeholder="Masukan nomor klaim" />
          <p class="sub-track">Buat Klaim</p>
          <div class="btn">
            <app-red-button title="Kirim"></app-red-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RedButton from "../RedButton";
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
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
.btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.track {
  text-align: left;
  width: 330px;
  margin-left: 6px;
  font-family: "Poppins", sans-serif;
  object-fit: contain;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.track-claim {
  text-align: left;
  object-fit: contain;
  width: 150px;
  margin-left: 6px;
  height: 15px;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  font-family: "Poppins", sans-serif;
  line-height: normal;
  letter-spacing: normal;
}
.sub-track {
  width: 180px;
  height: 9px;
  font-family: "Poppins", sans-serif;
  margin-top: 5px;
  object-fit: contain;
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.24px;
  color: #d11f40;
}
.cards {
  margin: 20px;
}
.input-track {
  display: flex;
  flex-direction: row;
}
.img-question {
  width: 25px;
  height: 25px;
  align-self: center;
  margin-left: 10px;
}
.content {
  margin-top: 15px;
}

.add-input {
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;
}
.close {
  width: 20px;
  height: 20px;
  align-self: center;
}

.content-input {
  display: flex;
  flex-direction: row;
}
</style>