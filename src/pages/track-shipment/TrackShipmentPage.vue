<template>
  <div>
    <section class="section-content">
      <div class="bg-detail-check-track" :style="item" v-if="isDesktop()">
        <div class="content-breadcrumb-track">
          <div class="container">
            <nav class="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <a href="/">
                    <img src="../../assets/home.png" class="icon-home" />
                  </a>
                </li>
                <li class="is-active">
                  <a href="/claim" aria-current="page" class="route-breadcrumb">Shipment Tracking</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-detail-check-track-mobile" :style="secondItem" v-if="isMobile()"></div>
    </section>
    <div class="shipping-content-detail-tracking">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="title-card-track">
              <p class="check-tracking">Lacak Pengiriman</p>
              <p class="sub-detail-track" v-show="showCancel" @click.prevent="clearInput">Cancel</p>
            </div>
            <div class="columns">
              <div class="column">
                <div class="ship-title-track-detail-content" v-if="isDesktop()">
                  <p class="ship-title-track-detail">Masukkan nomor pengiriman</p>
                  <p class="sub-detail-track" @click.prevent="newInput" v-if="show">+Tambah</p>
                </div>
                <div class="ship-title-track-detail-content" v-if="isMobile()">
                  <p class="ship-title-track-detail">Masukan nomor pengiriman</p>
                </div>
                <div class="columns">
                  <div class="column" v-for="(track, index) in tracks" v-bind:key="index">
                    <div class="content-input-detail-track">
                      <div class="custom-input-detail-track" v-if="index === 0">
                        <input type="text" placeholder="Masukan nomor pengiriman" />
                      </div>
                      <div class="custom-input-detail-track" v-else>
                        <input type="text" placeholder="Masukan nomor pengiriman" />
                        <img
                          src="../../assets/close.png"
                          class="close"
                          @click.prevent="deleteInput(index)"
                          v-show="showLogo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="isMobile()">
                  <p class="sub-detail-track" @click.prevent="newInput" v-if="show">+Tambah</p>
                </div>
              </div>
              <div class="level">
                <div class="btn-detail-track" @click="submitTrack()">
                  <app-red-button title="Lacak"></app-red-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-content">
      <div class="content-result-claim">
        <p class="title-search-result-claim">Status Pengiriman Anda</p>
        <p class="subtitle-search-result-claim">Status sesuai dengan setiap nomor tanda terima</p>
        <div class="content-track-process">
          <div class="container">
            <p class="click-for-detail">Klik untuk detail</p>
            <vs-collapse accordion>
              <div class="expand-margin">
                <div class="card">
                  <vs-collapse-item open>
                    <div slot="header">
                      <div class="ship-title-track-content">
                        <p class="ship-title-track-expand">ID Pengiriman</p>
                        <p class="ship-title-track-expand-bold">88-19-5518645</p>
                      </div>
                    </div>
                    <div class="content-track-process">
                      <div class="level">
                        <div class="track-process">
                          <p class="info-track">The Package has been processed by (POS Name), city</p>
                          <img src="../../assets/cardboard_blue.png" class="icon-track-process" />
                          <div class="border-blue" />
                        </div>
                        <div class="track-process">
                          <div class="content-split-track" v-if="isDesktop()">
                            <p
                              class="info-track-top"
                            >The Package has arrived at (origin consolidator), city</p>
                            <img src="../../assets/store_gray.png" class="icon-track-process" />
                          </div>
                          <div class="content-split-track" v-if="isMobile()">
                            <img src="../../assets/store_gray.png" class="icon-track-process" />
                            <p
                              class="info-track"
                            >The Package has arrived at (origin consolidator), city</p>
                          </div>
                          <div class="border-gray" />
                        </div>
                        <div class="track-process">
                          <div class="content-split-track-odd">
                            <img src="../../assets/airplane_gray.png" class="icon-track-process" />
                            <p class="info-track">The Package has been processed by E-cargo</p>
                          </div>
                          <div class="border-gray" />
                        </div>
                        <div class="track-process">
                          <div class="content-split-track" v-if="isDesktop()">
                            <p
                              class="info-track-top"
                            >The Package has arrived at (origin consolidator)</p>
                            <img src="../../assets/store_gray.png" class="icon-track-process" />
                          </div>
                          <div class="content-split-track" v-if="isMobile()">
                            <img src="../../assets/store_gray.png" class="icon-track-process" />
                            <p class="info-track">The Package has arrived at (origin consolidator)</p>
                          </div>
                          <div class="border-gray" />
                        </div>
                        <div class="track-process">
                          <div class="content-split-track-odd">
                            <img src="../../assets/car_gray.png" class="icon-track-process" />
                            <p class="info-track">The package will be sent by (Courier name), city</p>
                          </div>
                          <div class="border-gray" />
                        </div>
                        <br />
                        <br />
                        <div class="track-process">
                          <img src="../../assets/checklist_gray.png" class="icon-track-process" />
                          <p
                            class="info-track"
                          >The package has been received by (recipient's name), city</p>
                        </div>
                      </div>
                    </div>
                  </vs-collapse-item>
                </div>
              </div>
              <div class="expand-margin">
                <div class="card">
                  <vs-collapse-item>
                    <div slot="header">
                      <div class="ship-title-track-content">
                        <p class="ship-title-track-expand">ID Pengiriman</p>
                        <p class="ship-title-track-expand-bold">88-19-1234567</p>
                      </div>
                    </div>
                    <div class="content-track-process">
                      <div class="level">
                        <div class="track-process">
                          <p class="info-track">The Package has been processed by (POS Name), city</p>
                          <img src="../../assets/cardboard_blue.png" class="icon-track-process" />
                          <div class="border-blue" />
                        </div>
                        <div class="track-process">
                          <div class="content-split-track" v-if="isDesktop()">
                            <p
                              class="info-track-top"
                            >The Package has arrived at (origin consolidator), city</p>
                            <img src="../../assets/store_blue.png" class="icon-track-process" />
                          </div>
                          <div class="content-split-track" v-if="isMobile()">
                            <img src="../../assets/store_blue.png" class="icon-track-process" />
                            <p
                              class="info-track"
                            >The Package has arrived at (origin consolidator), city</p>
                          </div>
                          <div class="border-blue" />
                        </div>
                        <div class="track-process">
                          <div class="content-split-track-odd">
                            <img src="../../assets/airplane_blue.png" class="icon-track-process" />
                            <p class="info-track">The Package has been processed by E-cargo</p>
                          </div>
                          <div class="border-blue" />
                        </div>
                        <div class="track-process">
                          <div class="content-split-track" v-if="isDesktop()">
                            <p
                              class="info-track-top"
                            >The Package has arrived at (origin consolidator)</p>
                            <img src="../../assets/store_blue.png" class="icon-track-process" />
                          </div>
                          <div class="content-split-track" v-if="isMobile()">
                            <img src="../../assets/store_blue.png" class="icon-track-process" />
                            <p class="info-track">The Package has arrived at (origin consolidator)</p>
                          </div>
                          <div class="border-blue" />
                        </div>
                        <div class="track-process">
                          <div class="content-split-track-odd">
                            <img src="../../assets/car_blue.png" class="icon-track-process" />
                            <p class="info-track">The package will be sent by (Courier name), city</p>
                          </div>
                          <div class="border-blue" />
                        </div>
                        <br />
                        <br />
                        <div class="track-process">
                          <img src="../../assets/checklist_blue.png" class="icon-track-process" />
                          <p
                            class="info-track"
                          >The package has been received by (recipient's name), city</p>
                        </div>
                      </div>
                    </div>
                  </vs-collapse-item>
                </div>
              </div>
              <div class="expand-margin">
                <div class="card">
                  <vs-collapse-item>
                    <div slot="header">
                      <div class="ship-title-track-content">
                        <p class="ship-title-track-expand">ID Pengiriman</p>
                        <p class="ship-title-track-expand-bold">T19SQMAR</p>
                      </div>
                    </div>
                    <div class="content-track-process">
                      <div class="level">
                        <div class="other-track-result">
                          <div class="cloud-not-found" :style="cloudNotFound">
                            <img src="../../assets/box_not_found.png" class="box-not-found" />
                          </div>
                          <p class="package-not-available">Info paket Anda tidak tersedia</p>
                        </div>
                      </div>
                    </div>
                  </vs-collapse-item>
                </div>
              </div>
              <div class="expand-margin">
                <div class="card">
                  <vs-collapse-item>
                    <div slot="header">
                      <div class="ship-title-track-content">
                        <p class="ship-title-track-expand">ID Pengiriman</p>
                        <p class="ship-title-track-expand-bold">J20SQBER</p>
                      </div>
                    </div>
                    <div class="content-track-process">
                      <div class="level">
                        <div class="other-track-result">
                          <img src="../../assets/process_track.png" class="process-track" />
                          <p class="package-not-available">Tunggu... paket Anda sedang diproses</p>
                        </div>
                      </div>
                    </div>
                  </vs-collapse-item>
                </div>
              </div>
            </vs-collapse>
          </div>
        </div>
      </div>
    </section>
    <app-border></app-border>
    <section class="section">
      <app-footer></app-footer>
    </section>
    <app-bottom></app-bottom>
  </div>
</template>

<script>
import Border from "../../components/border/Border";
import Footer from "../../components/footer/Footer";
import Bottom from "../../components/bottom/Bottom";
import RedButton from "../../components/button/RedButton";
export default {
  name: "detail-claim-card",
  components: {
    "app-border": Border,
    "app-footer": Footer,
    "app-bottom": Bottom,
    "app-red-button": RedButton
  },
  data() {
    return {
      item: {
        backgroundImage: `url(${require("../../assets/bg_track_shipment.png")})`
      },
      secondItem: {
        backgroundImage: `url(${require("../../assets/bg_track_shipment_mobile.png")})`
      },
      cloudNotFound: {
        backgroundImage: `url(${require("../../assets/cloud_not_found.png")})`
      },
      tracks: [""],
      showLogo: false,
      show: true,
      showInput: true,
      showCancel: false,
      q: this.$route.query.q
    };
  },
  methods: {
    newInput(track) {
      if (this.tracks.length === 5) {
        this.show = false;
        this.showCancel = true;
        alert("only track 5 shipment");
      } else {
        if (this.tracks.length === 1) {
          this.showCancel = true;
          this.showLogo = true;
        } else if (this.tracks.length === 1) {
          this.showCancel = false;
        } else this.showLogo = true;
        this.showInput = false;
        this.tracks.push(track);
      }
    },
    deleteInput(index) {
      if (this.tracks.length === 2) {
        this.showLogo = false;
        this.showCancel = false;
        this.tracks.splice(index, 1);
        return true;
      } else {
        this.show = true;
        this.tracks.splice(index, 1);
      }
    },
    clearInput() {
      this.tracks = [""];
      this.show = true;
      this.showLogo = false;
      this.showCancel = false;
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
    isDesktop() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return false;
      } else {
        return true;
      }
    },
    submitTrack() {
      console.log(this.tracks);
    }
  }
};
</script>

<style scoped>
@import "./trackshipment.css";
</style>