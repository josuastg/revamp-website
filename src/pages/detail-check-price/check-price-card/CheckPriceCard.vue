<template>
  <div class="shipping-content-detail-price">
  <div class="container">
    <div class="card">
      <div class="card-content">
        <p class="check-tarif">Cek Tarif</p>
        <div class="columns">
          <div class="column">
            <p class="ship-title-detail">Kota Asal</p>
            <input class="input" type="text" placeholder="Masukan alamat kota asal" />
          </div>
          <div class="column">
            <p class="ship-title-detail">Kota Tujuan</p>
            <input class="input" type="text" placeholder="Masukan alamat kota tujuan" />
          </div>
          <div class="column">
            <p class="ship-title">Berat Paket</p>
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
</template>

<script>
import RedButton from "../../../components/button/RedButton";

export default {
  components: {
    "app-red-button": RedButton
  }
};
</script>

<style scoped>
@import "./checkpricecard.css";
</style>