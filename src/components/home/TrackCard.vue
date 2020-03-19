<template>
  <div class="container">
    <div class="cards">
      <p class="track">You can simply track your shipment</p>
      <div class="card">
        <div class="card-content">
          <div class="content">
            <input class="input" type="text" placeholder="Enter Tracking number" />
            <p class="sub-track">+Track Another Shipment</p>
            <div class="btn">
              <app-red-button title="Track"></app-red-button>
            </div>
          </div>
        </div>
      </div>
      <p class="track-claim">Tracking Claim</p>
      <div class="card">
        <div class="card-content">
          <div class="content">
            <input class="input" type="text" placeholder="Enter Claim number" />
            <p class="sub-track">+Form Klaim</p>

            <div class="btn">
              <app-red-button title="Track"></app-red-button>
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

<style scop[ed>
.btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.track {
  text-align: center;
  width: 330px;
  height: 15px;
  margin-left: 8px;
  object-fit: contain;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.track-claim {
  text-align: center;
  object-fit: contain;
  width: 150px;
  margin-left: 6px;
  height: 15px;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.sub-track {
  width: 180px;
  height: 9px;
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
.cards{
    margin: 10px;
}
</style>