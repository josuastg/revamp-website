<template>
  <div class="shipping-content">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="columns">
            <div class="column">
              <p class="ship-title">Kota Asal</p>
              <keep-alive>
                <input
                  class="input"
                  type="text"
                  placeholder="Masukan alamat kota asal"
                  v-model="origin"
                />
              </keep-alive>
            </div>
            <div class="column">
              <p class="ship-title">Kota Tujuan</p>
              <keep-alive>
                <input
                  class="input"
                  type="text"
                  placeholder="Masukan alamat kota tujuan"
                  v-model="destination"
                />
              </keep-alive>
            </div>
            <div class="column">
              <p class="ship-title">Berat Paket</p>
              <keep-alive>
                <input
                  class="input"
                  type="number"
                  placeholder="Masukan berat paket (max.100kg)"
                  min="1"
                  max="100"
                  v-model="weight"
                />
              </keep-alive>
            </div>
            <div class="level">
              <div class="btn">
                <button
                  @click="getTariff()"
                  class="button is-danger"
                  :disabled="origin === '' ||destination === '' ||weight === null  "
                >
                  <p class="title">Cek Tarif</p>
                </button>
                <!-- <app-red-button title="Cek Tarif" :disabled="origin === '' ||destination === '' ||weight === ''  " ></app-red-button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapActions } from "vuex";
// import RedButton from "../../../components/button/RedButton";
export default {
  components: {
    // "app-red-button": RedButton
  },
  data() {
    return {
      checkPrice: [],
      message: "",
      origin: "",
      destination: "",
      weight: null
    };
  },
  methods: {
    getTariff() {
      const payload = {
        origin: this.origin,
        destination: this.destination,
        weight: Number(this.weight)
      };
      this.initCheckPrice(payload);
    },
    // navigateToDetailCheckPrice() {
    //   this.$router.push("/tariff");
    // },

    // getOrigin() {
    //   axios
    //     .get(`/api/api/routes/origin/a`)
    //     .then(res => {
    //       this.origin = res.data;
    //     })
    //     .catch(err => {
    //       console.log((this.message = err.message));
    //     });
    // },
    // getDestination() {
    //   axios
    //     .get(`/api/api/routes/origin/${this.typeDestination}`)
    //     .then(res => {
    //       console.log((this.destination = JSON.stringify(res.data)));
    //     })
    //     .catch(err => {
    //       console.log((this.message = err.message));
    //     }),
    ...mapActions(["initCheckPrice"])
  },
  mounted: function() {
    console.log("mounted");
  },
  computed: {
    // ...mapState(["check_price"])
    // filteredOrigin() {
    //   if (this.typeOrigin) {
    //     return this.origin.filter(org => {
    //       return this.typeOrigin
    //         .toLowerCase()
    //         .split(" ")
    //         .every(v => org.Name.toLowerCase().includes(v));
    //     });
    //   } else {
    //     return this.origin;
    //   }
    // },
    // filteredDestination() {
    //   if (this.typeDestination) {
    //     return this.destination.filter(dest => {
    //       return this.typeDestination
    //         .toLowerCase()
    //         .split(" ")
    //         .every(v => dest.Name.toLowerCase().includes(v));
    //     });
    //   } else {
    //     return this.destination;
    //   }
    // }
  }
};
</script>

<style scoped>
@import "./checkpricecard.css";
</style>

     