<template>
  <div class="shipping-content">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="columns">
            <div class="column">
              <p class="ship-title">Kota Asal</p>
              <div class="content-select">
                <v-select
                  label="name"
                  :filterable="false"
                  @search="onSearchOrigin"
                  :options="listOrigin"
                  :reduce="listOrigin => listOrigin.Name"
                  v-model="origin"
                  close-on-select
                  placeholder="Masukkan alamat kota asal"
                >
                  <template slot="no-options">Masukkan alamat kota asal...</template>
                  <template slot="option" slot-scope="option">
                    <div class="d-center">{{ option.Name}}</div>
                  </template>
                  <template slot="selected-option" slot-scope="option">
                    <div class="selected d-center">{{ option.Name}}</div>
                  </template>
                </v-select>
              </div>
            </div>
            <div class="column">
              <p class="ship-title">Kota Tujuan</p>
              <div class="content-select">
                <v-select
                  label="name"
                  :filterable="false"
                  @search="onSearchDestination"
                  :options="listDestination"
                  :reduce="listDestination => listDestination.Name"
                  v-model="destination"
                  placeholder="Masukkan alamat kota tujuan"
                >
                  <template slot="no-options">Masukkan alamat kota Tujuan...</template>
                  <template slot="option" slot-scope="option">
                    <div class="d-center">{{ option.Name}}</div>
                  </template>
                  <template slot="selected-option" slot-scope="option">
                    <div class="selected d-center">{{ option.Name}}</div>
                  </template>
                </v-select>
              </div>
            </div>
            <div class="column">
              <p class="ship-title">Berat Paket</p>
              <div class="custom-input-weight">
                <input
                  type="number"
                  placeholder="Masukan berat paket (max.100kg)"
                  min="1"
                  max="100"
                  v-model="weight"
                />
              </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      checkPrice: [],
      message: "",
      origin: "",
      destination: "",
      weight: null,
      listOrigin: [],
      listDestination: []
    };
  },
  watch: {
    CHECK_PRICE(val) {
      if (val) {
        this.$router.push("/tariff");
      }
    }
  },
  computed: {
    ...mapGetters(["CHECK_PRICE"])
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
    onSearchOrigin(search, loading) {
      loading(false);
      this.getOrigin(loading, search);
      loading(false);
    },
    onSearchDestination(search, loading) {
      loading(false);
      this.getDestination(loading, search);
    },
    getOrigin(loading, search) {
      axios
        .get(`/routes/origin/${search}`)
        .then(res => {
          this.listOrigin = res.data;
          loading(false);
        })
        .catch(err => {
          console.log((this.message = err.message));
        });
    },
    getDestination(loading, search) {
      axios
        .get(`/routes/destination/${search}`)
        .then(res => {
          this.listDestination = res.data;
          loading(false);
        })
        .catch(err => {
          console.log((this.message = err.message));
        });
    },
    ...mapActions(["initCheckPrice"])
  }
};
</script>

<style scoped>
@import "./checkpricecard.css";
</style>

     