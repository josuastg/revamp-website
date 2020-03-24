<template>
  <div class="cards">
    <p class="track">Lacak Pengiriman Anda</p>
    <div class="content">
      <div class="card">
        <div class="card-content">
          <div class="input-track">
            <input class="input" type="text" placeholder="Masukan nomor pengiriman" />
            <img src="../../assets/question.png" class="img-question" />
          </div>
          <p class="sub-track">+Tambah</p>
          <div class="btn">
            <app-red-button title="Lacak"></app-red-button>
          </div>
        </div>
      </div>
    </div>
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
  width: 22px;
  height: 22px;
  margin-top: 10px;
  margin-left: 5px;
}
.content {
  margin-top: 15px;
}
</style>