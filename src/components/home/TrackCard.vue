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
                <img src="../../assets/close.png" class="close" @click.prevent="deleteInput(index)" />
              </div>
            </div>

            <img src="../../assets/question.png" class="img-question" />
          </div>
          <p class="sub-track" @click.prevent="newInput">+Tambah</p>
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
      tracks: ["input"]
    };
  },
  methods: {
    newInput(track) {
      this.tracks.push(track);
    },
    deleteInput(index) {
      if (this.tracks.length === 1) {
        return false;
      } else {
        this.tracks.splice(index, 1);
      }
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
  width: 28px;
  height: 28px;
  align-self: center;
  margin-left: 10px;
}
.content {
  margin-top: 15px;
}

.add-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center ;
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