<template>
  <div class="content">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="columns">
            <div class="column">
              <h5>Origin</h5>
              <input class="input" type="text" placeholder="Type destination address" />
            </div>
            <div class="column">
              <h5>Destination</h5>
              <input class="input" type="text" placeholder="Type destination address" />
            </div>
            <div class="column">
              <h5>Weight</h5>
              <input
                class="input"
                type="number"
                placeholder="Insert a weight (max.100kg)"
                min="1"
                max="100"
              />
            </div>
            <div class="level">
              <div class="btn">
                <app-red-button title="Check Price"></app-red-button>
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
h5 {
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  font-stretch: normal;
  font-style: normal;
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
</style>

     