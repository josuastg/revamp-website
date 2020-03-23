<template>
  <div class="content">
    <div class="shipping-content">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column">
                <h5>Kota Asal</h5>
                <input class="input" type="text" placeholder="Masukan alamat kota asal" />
              </div>
              <div class="column">
                <h5>Kota Tujuan</h5>
                <input class="input" type="text" placeholder="Masukan alamat kota tujuan" />
              </div>
              <div class="column">
                <h5>Berat Paket</h5>
                <input
                  class="input"
                  type="number"
                  placeholder="Masukan berat paket (max.100kg)"
                  min="1"
                  max="100"
                />
              </div>
              <div class="level">
                <div class="btn">
                  <app-red-button title="Cek Tarif"></app-red-button>
                </div>
              </div>
            </div>
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

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

h5 {
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  font-stretch: normal;
  font-style: normal;
  font-family: "Poppins", sans-serif;
  text-align: left;
  line-height: normal;
  letter-spacing: normal;
  color: #1a1421;
}
.btn {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  margin: 12px;
}
.shipping-content {
  margin: 18px;
}
</style>

     