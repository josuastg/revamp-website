<template>
  <div class="shipping-content-detail">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <p class="check-tarif">Klaim Paket</p>
          <div class="columns">
            <div class="column">
              <p class="ship-title-detail">Input your claim number</p>
              <input class="input" type="text" placeholder="Masukan nomor claim" />
              <p class="claim-information">*Nomor klaim didapat dari saat pengajuan klaim / sms notifikasi dari Lion Parcel. </p>
            </div>
            <div class="level">
              <div class="btn-track">
                <app-red-button title="Kirim"></app-red-button>
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
    "app-red-button": RedButton,
  }
};
</script>

<style scoped>
@import "./claimcard.css";
</style>