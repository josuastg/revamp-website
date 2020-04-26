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
                  <div class="column" v-for="(trk, index) in tracks" v-bind:key="index">
                    <div class="content-input-detail-track">
                      <div class="custom-input-detail-track">
                        <input
                          type="text"
                          placeholder="Masukan nomor pengiriman"
                          v-model="trk.track"
                        />
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
                  <p class="sub-detail-track" @click.prevent="newInput()" v-if="show">+Tambah</p>
                </div>
              </div>
              <div class="level">
                <div class="btn-detail-track" @click="getTrackShipment()">
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
        <p class="title-search-result-track">Status Pengiriman Anda</p>
        <p class="subtitle-search-result-track">Status sesuai dengan setiap nomor tanda terima</p>
        <div id="content-track-process">
          <div class="container">
            <p class="click-for-detail">Klik untuk detail</p>
            <vs-collapse accordion v-for="(result, index) in RESULT_TRACK" v-bind:key="index">
              <div
                class="expand-margin"
                v-for="(content, indexContent) in result"
                v-bind:key="indexContent"
              >
                <div class="card">
                  <vs-collapse-item open v-if="indexContent === 0">
                    <div slot="header">
                      <div class="ship-title-track-content">
                        <p class="ship-title-track-expand">ID Pengiriman</p>
                        <p class="ship-title-track-expand-bold">{{content.q}}</p>
                      </div>
                    </div>
                    <div
                      class="content-track-process"
                      v-if="content.is_cnx === true && content.is_exist === true"
                    >
                      <div class="track-result-not-found">
                        <div class="cloud-not-found" :style="cloudNotFound">
                          <img class="box-cancel" src="../../assets/box_cancel.png" />
                        </div>
                        <p class="package-not-available">Paket Canceled</p>
                      </div>
                    </div>
                    <div class="content-track-process" v-if="content.histories !== null  ">
                      <div class="level-margin" v-if="content.histories.ecargo_remarks !== ''">
                        <div class="somediv" v-if="isDesktop()">
                          <p
                            class="info-track-top"
                            v-if="content.histories.sti_remarks !== '' "
                          >{{content.histories.sti_remarks}}</p>
                          <p
                            class="info-track-top-disabled"
                            v-else
                          >Paket telah tiba di (konsolidator asal), kota</p>
                          <p class="info-track-top" />
                          <p
                            class="info-track-top"
                            v-if="content.histories.sti_dest_remarks !== '' "
                          >{{content.histories.sti_dest_remarks}}</p>
                          <p
                            class="info-track-top-disabled"
                            v-else
                          >Paket telah tiba di (konsolidator asal), kota</p>
                          <p class="info-track-top" />
                        </div>

                        <div class="level">
                          <div class="track-process" v-if="content.histories.bkd_remarks !== '' ">
                            <p class="info-track">{{content.histories.bkd_remarks}}</p>
                            <img src="../../assets/cardboard_blue.png" class="icon-track-process" />
                            <div class="border-blue" />
                          </div>
                          <div class="track-process" v-else>
                            <div class="border-gray-ecargo" />
                          </div>
                          <div class="track-process" v-if="content.histories.sti_remarks !== '' ">
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                              <p class="info-track">{{content.histories.sti_remarks}}</p>
                            </div>
                            <div class="border-blue-ecargo" />
                          </div>
                          <div class="track-process" v-else>
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                              <p
                                class="info-track-disabled"
                              >Paket telah tiba di (konsolidator asal), kota</p>
                            </div>
                            <div class="border-gray-ecargo" />
                          </div>
                          <div
                            class="track-process"
                            v-if="content.histories.ecargo_remarks !== '' "
                          >
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/airplane_blue.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/airplane_blue.png" class="icon-track-process" />
                              <p class="info-track">{{content.histories.ecargo_remarks}}</p>
                            </div>
                            <div class="border-blue-ecargo" />
                          </div>
                          <div class="track-process" v-else>
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/airplane_gray.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/airplane_gray.png" class="icon-track-process" />
                              <p class="info-track-disabled">Paket telah diproses oleh E-Cargo</p>
                            </div>
                            <div class="border-gray-ecargo" />
                          </div>
                          <div
                            class="track-process"
                            v-if="content.histories.sti_dest_remarks !== '' "
                          >
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                              <p class="info-track">{{content.histories.sti_dest_remarks}}</p>
                            </div>
                            <div class="border-blue-ecargo" />
                          </div>
                          <div class="track-process" v-else>
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                              <p class="info-track">Paket telah tiba di (konsolidator asal), kota</p>
                            </div>
                            <div class="border-gray-ecargo" />
                          </div>
                          <div class="track-process" v-if="content.histories.del_remarks !== '' ">
                            <div class="content-split-track">
                              <img src="../../assets/car_blue.png" class="icon-track-process" />
                              <p
                                class="info-track"
                                v-if="isMobile()"
                              >{{content.histories.del_remarks}}</p>
                            </div>
                            <div class="border-blue-ecargo" />
                          </div>
                          <div class="track-process" v-else>
                            <div class="content-split-track">
                              <img src="../../assets/car_gray.png" class="icon-track-process" />
                              <p
                                class="info-track-disabled"
                                v-if="isMobile()"
                              >Paket akan dikirim oleh (nama Kurir), kota}</p>
                            </div>
                            <div class="border-gray-ecargo" />
                          </div>
                          <br v-if="isMobile()" />
                          <div class="track-process" v-if="content.histories.pod_remarks !== '' ">
                            <img src="../../assets/checklist_blue.png" class="icon-track-process" />
                            <p class="info-track">{{content.histories.pod_remarks}}</p>
                          </div>
                          <div class="track-process" v-else>
                            <img src="../../assets/checklist_gray.png" class="icon-track-process" />
                            <p
                              class="info-track-disabled"
                            >Paket telah diterima oleh (nama penerima), kota</p>
                          </div>
                        </div>
                        <div class="somediv" v-if="isDesktop()">
                          <p class="info-track-bottom" />
                          <p
                            class="info-track-bottom"
                            v-if="content.histories.ecargo_remarks !== '' "
                          >{{content.histories.ecargo_remarks}}</p>
                          <p
                            class="info-track-bottom-disabled"
                            v-else
                          >Paket telah diproses oleh E-Cargo</p>
                          <p class="info-track-bottom" />
                          <p
                            class="info-track-bottom"
                            v-if="content.histories.del_remarks !== '' "
                          >{{content.histories.del_remarks}}</p>
                          <p
                            class="info-track-bottom-disabled"
                            v-else
                          >Paket akan dikirim oleh (nama Kurir), kota</p>
                        </div>
                      </div>
                      <div class="level-margin" v-else-if="content.is_cnx === false">
                        <div class="somediv" v-if="isDesktop()">
                          <p
                            class="info-track-top"
                            v-if="content.histories.sti_dest_remarks !== '' && content.is_cnx === false "
                          >{{content.histories.sti_dest_remarks}}</p>
                          <p
                            class="info-track-top-disabled"
                            v-else-if="content.is_cnx === false"
                          >Paket telah tiba di (konsolidator asal), kota</p>
                        </div>

                        <div class="level">
                          <div
                            class="track-process"
                            v-if="content.histories.bkd_remarks !== '' && content.is_cnx === false"
                          >
                            <p class="info-track">{{content.histories.bkd_remarks}}</p>
                            <img src="../../assets/cardboard_blue.png" class="icon-track-process" />
                            <div class="border-blue-non-ecargo" />
                          </div>
                          <div class="track-process" v-else-if="content.is_cnx === false">
                            <div class="border-gray-non-ecargo" />
                          </div>
                          <div
                            class="track-process"
                            v-if="content.histories.sti_remarks !== '' && content.is_cnx === false "
                          >
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                              <p class="info-track">{{content.histories.sti_remarks}}</p>
                            </div>
                            <div class="border-blue-non-ecargo" />
                          </div>
                          <div class="track-process" v-else-if="content.is_cnx === false">
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                              <p
                                class="info-track-disabled"
                              >Paket telah tiba di (konsolidator asal), kota</p>
                            </div>
                            <div class="border-gray-non-ecargo" />
                          </div>
                          <div
                            class="track-process"
                            v-if="content.histories.sti_dest_remarks !== '' && content.is_cnx === false "
                          >
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                              <p class="info-track">{{content.histories.sti_dest_remarks}}</p>
                            </div>
                            <div class="border-blue-non-ecargo" />
                          </div>
                          <div class="track-process" v-else-if="content.is_cnx === false">
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                              <p
                                class="info-track-disabled"
                              >Paket telah tiba di (konsolidator asal), kota</p>
                            </div>
                            <div class="border-gray-non-ecargo" />
                          </div>
                          <div
                            class="track-process"
                            v-if="content.histories.del_remarks !== '' && content.is_cnx === false"
                          >
                            <div class="content-split-track">
                              <img src="../../assets/car_blue.png" class="icon-track-process" />
                              <p
                                class="info-track"
                                v-if="isMobile()"
                              >{{content.histories.del_remarks}}</p>
                            </div>
                            <div class="border-blue-non-ecargo" />
                          </div>
                          <div class="track-process" v-else-if="content.is_cnx === false">
                            <div class="content-split-track">
                              <img src="../../assets/car_gray.png" class="icon-track-process" />
                              <p
                                class="info-track-disabled"
                                v-if="isMobile()"
                              >Paket akan dikirim oleh (nama Kurir), kota}</p>
                            </div>
                            <div class="border-gray-non-ecargo" />
                          </div>
                          <br v-if="isMobile()" />
                          <div
                            class="track-process"
                            v-if="content.histories.pod_remarks !== '' && content.is_cnx === false"
                          >
                            <img src="../../assets/checklist_blue.png" class="icon-track-process" />
                            <p class="info-track">{{content.histories.pod_remarks}}</p>
                          </div>
                          <div class="track-process" v-else-if="content.is_cnx === false">
                            <img src="../../assets/checklist_gray.png" class="icon-track-process" />
                            <p
                              class="info-track-disabled"
                            >Paket telah diterima oleh (nama penerima), kota</p>
                          </div>
                        </div>
                        <div class="somediv" v-if="isDesktop()">
                          <p
                            class="info-track-bottom"
                            v-if="content.histories.sti_remarks !== '' && content.is_cnx === false"
                          >{{content.histories.sti_remarks}}</p>
                          <p
                            class="info-track-bottom-disabled"
                            v-else-if="content.is_cnx === false"
                          >Paket telah tiba di (konsolidator asal), kota</p>
                          <p class="info-track-bottom" />
                          <p
                            class="info-track-bottom"
                            v-if="content.histories.del_remarks !== '' && content.is_cnx === false"
                          >{{content.histories.del_remarks}}</p>
                          <p
                            class="info-track-bottom-disabled"
                            v-else-if="content.is_cnx === false"
                          >Paket akan dikirim oleh (nama Kurir), kota</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="content-track-process"
                      v-else-if="content.histories === null && content.is_stt === true && content.is_exist === false"
                    >
                      <div class="track-result-not-found">
                        <div class="cloud-not-found" :style="cloudNotFound">
                          <img src="../../assets/box_not_found.png" class="box-not-found" />
                        </div>
                        <p class="package-not-available">Info paket Anda tidak tersedia</p>
                      </div>
                    </div>
                    <div
                      class="content-track-process"
                      v-else-if="content.histories === null && content.is_stt === false && content.is_exist === false"
                    >
                      <div class="track-result-not-found">
                        <img src="../../assets/process_track.png" class="process-track" />
                        <p class="package-not-available">Tunggu... paket Anda sedang diproses</p>
                      </div>
                    </div>
                  </vs-collapse-item>
                  <vs-collapse-item  v-else>
                    <div slot="header">
                      <div class="ship-title-track-content">
                        <p class="ship-title-track-expand">ID Pengiriman</p>
                        <p class="ship-title-track-expand-bold">{{content.q}}</p>
                      </div>
                    </div>
                    <div
                      class="content-track-process"
                      v-if="content.is_cnx === true && content.is_exist === true"
                    >
                      <div class="track-result-not-found">
                        <div class="cloud-not-found" :style="cloudNotFound">
                          <img class="box-cancel" src="../../assets/box_cancel.png" />
                        </div>
                        <p class="package-not-available">Paket Canceled</p>
                      </div>
                    </div>
                    <div class="content-track-process" v-if="content.histories !== null  ">
                      <div class="level-margin" v-if="content.histories.ecargo_remarks !== ''">
                        <div class="somediv" v-if="isDesktop()">
                          <p
                            class="info-track-top"
                            v-if="content.histories.sti_remarks !== '' "
                          >{{content.histories.sti_remarks}}</p>
                          <p
                            class="info-track-top-disabled"
                            v-else
                          >Paket telah tiba di (konsolidator asal), kota</p>
                          <p class="info-track-top" />
                          <p
                            class="info-track-top"
                            v-if="content.histories.sti_dest_remarks !== '' "
                          >{{content.histories.sti_dest_remarks}}</p>
                          <p
                            class="info-track-top-disabled"
                            v-else
                          >Paket telah tiba di (konsolidator asal), kota</p>
                          <p class="info-track-top" />
                        </div>

                        <div class="level">
                          <div class="track-process" v-if="content.histories.bkd_remarks !== '' ">
                            <p class="info-track">{{content.histories.bkd_remarks}}</p>
                            <img src="../../assets/cardboard_blue.png" class="icon-track-process" />
                            <div class="border-blue" />
                          </div>
                          <div class="track-process" v-else>
                            <div class="border-gray-ecargo" />
                          </div>
                          <div class="track-process" v-if="content.histories.sti_remarks !== '' ">
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                              <p class="info-track">{{content.histories.sti_remarks}}</p>
                            </div>
                            <div class="border-blue-ecargo" />
                          </div>
                          <div class="track-process" v-else>
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                              <p
                                class="info-track-disabled"
                              >Paket telah tiba di (konsolidator asal), kota</p>
                            </div>
                            <div class="border-gray-ecargo" />
                          </div>
                          <div
                            class="track-process"
                            v-if="content.histories.ecargo_remarks !== '' "
                          >
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/airplane_blue.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/airplane_blue.png" class="icon-track-process" />
                              <p class="info-track">{{content.histories.ecargo_remarks}}</p>
                            </div>
                            <div class="border-blue-ecargo" />
                          </div>
                          <div class="track-process" v-else>
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/airplane_gray.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/airplane_gray.png" class="icon-track-process" />
                              <p class="info-track-disabled">Paket telah diproses oleh E-Cargo</p>
                            </div>
                            <div class="border-gray-ecargo" />
                          </div>
                          <div
                            class="track-process"
                            v-if="content.histories.sti_dest_remarks !== '' "
                          >
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                              <p class="info-track">{{content.histories.sti_dest_remarks}}</p>
                            </div>
                            <div class="border-blue-ecargo" />
                          </div>
                          <div class="track-process" v-else>
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                              <p class="info-track">Paket telah tiba di (konsolidator asal), kota</p>
                            </div>
                            <div class="border-gray-ecargo" />
                          </div>
                          <div class="track-process" v-if="content.histories.del_remarks !== '' ">
                            <div class="content-split-track">
                              <img src="../../assets/car_blue.png" class="icon-track-process" />
                              <p
                                class="info-track"
                                v-if="isMobile()"
                              >{{content.histories.del_remarks}}</p>
                            </div>
                            <div class="border-blue-ecargo" />
                          </div>
                          <div class="track-process" v-else>
                            <div class="content-split-track">
                              <img src="../../assets/car_gray.png" class="icon-track-process" />
                              <p
                                class="info-track-disabled"
                                v-if="isMobile()"
                              >Paket akan dikirim oleh (nama Kurir), kota}</p>
                            </div>
                            <div class="border-gray-ecargo" />
                          </div>
                          <br v-if="isMobile()" />
                          <div class="track-process" v-if="content.histories.pod_remarks !== '' ">
                            <img src="../../assets/checklist_blue.png" class="icon-track-process" />
                            <p class="info-track">{{content.histories.pod_remarks}}</p>
                          </div>
                          <div class="track-process" v-else>
                            <img src="../../assets/checklist_gray.png" class="icon-track-process" />
                            <p
                              class="info-track-disabled"
                            >Paket telah diterima oleh (nama penerima), kota</p>
                          </div>
                        </div>
                        <div class="somediv" v-if="isDesktop()">
                          <p class="info-track-bottom" />
                          <p
                            class="info-track-bottom"
                            v-if="content.histories.ecargo_remarks !== '' "
                          >{{content.histories.ecargo_remarks}}</p>
                          <p
                            class="info-track-bottom-disabled"
                            v-else
                          >Paket telah diproses oleh E-Cargo</p>
                          <p class="info-track-bottom" />
                          <p
                            class="info-track-bottom"
                            v-if="content.histories.del_remarks !== '' "
                          >{{content.histories.del_remarks}}</p>
                          <p
                            class="info-track-bottom-disabled"
                            v-else
                          >Paket akan dikirim oleh (nama Kurir), kota</p>
                        </div>
                      </div>
                      <div class="level-margin" v-else-if="content.is_cnx === false">
                        <div class="somediv" v-if="isDesktop()">
                          <p
                            class="info-track-top"
                            v-if="content.histories.sti_dest_remarks !== '' && content.is_cnx === false "
                          >{{content.histories.sti_dest_remarks}}</p>
                          <p
                            class="info-track-top-disabled"
                            v-else-if="content.is_cnx === false"
                          >Paket telah tiba di (konsolidator asal), kota</p>
                        </div>

                        <div class="level">
                          <div
                            class="track-process"
                            v-if="content.histories.bkd_remarks !== '' && content.is_cnx === false"
                          >
                            <p class="info-track">{{content.histories.bkd_remarks}}</p>
                            <img src="../../assets/cardboard_blue.png" class="icon-track-process" />
                            <div class="border-blue-non-ecargo" />
                          </div>
                          <div class="track-process" v-else-if="content.is_cnx === false">
                            <div class="border-gray-non-ecargo" />
                          </div>
                          <div
                            class="track-process"
                            v-if="content.histories.sti_remarks !== '' && content.is_cnx === false "
                          >
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                              <p class="info-track">{{content.histories.sti_remarks}}</p>
                            </div>
                            <div class="border-blue-non-ecargo" />
                          </div>
                          <div class="track-process" v-else-if="content.is_cnx === false">
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                              <p
                                class="info-track-disabled"
                              >Paket telah tiba di (konsolidator asal), kota</p>
                            </div>
                            <div class="border-gray-non-ecargo" />
                          </div>
                          <div
                            class="track-process"
                            v-if="content.histories.sti_dest_remarks !== '' && content.is_cnx === false "
                          >
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_blue.png" class="icon-track-process" />
                              <p class="info-track">{{content.histories.sti_dest_remarks}}</p>
                            </div>
                            <div class="border-blue-non-ecargo" />
                          </div>
                          <div class="track-process" v-else-if="content.is_cnx === false">
                            <div class="content-split-track" v-if="isDesktop()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                            </div>
                            <div class="content-split-track" v-if="isMobile()">
                              <img src="../../assets/store_gray.png" class="icon-track-process" />
                              <p
                                class="info-track-disabled"
                              >Paket telah tiba di (konsolidator asal), kota</p>
                            </div>
                            <div class="border-gray-non-ecargo" />
                          </div>
                          <div
                            class="track-process"
                            v-if="content.histories.del_remarks !== '' && content.is_cnx === false"
                          >
                            <div class="content-split-track">
                              <img src="../../assets/car_blue.png" class="icon-track-process" />
                              <p
                                class="info-track"
                                v-if="isMobile()"
                              >{{content.histories.del_remarks}}</p>
                            </div>
                            <div class="border-blue-non-ecargo" />
                          </div>
                          <div class="track-process" v-else-if="content.is_cnx === false">
                            <div class="content-split-track">
                              <img src="../../assets/car_gray.png" class="icon-track-process" />
                              <p
                                class="info-track-disabled"
                                v-if="isMobile()"
                              >Paket akan dikirim oleh (nama Kurir), kota}</p>
                            </div>
                            <div class="border-gray-non-ecargo" />
                          </div>
                          <br v-if="isMobile()" />
                          <div
                            class="track-process"
                            v-if="content.histories.pod_remarks !== '' && content.is_cnx === false"
                          >
                            <img src="../../assets/checklist_blue.png" class="icon-track-process" />
                            <p class="info-track">{{content.histories.pod_remarks}}</p>
                          </div>
                          <div class="track-process" v-else-if="content.is_cnx === false">
                            <img src="../../assets/checklist_gray.png" class="icon-track-process" />
                            <p
                              class="info-track-disabled"
                            >Paket telah diterima oleh (nama penerima), kota</p>
                          </div>
                        </div>
                        <div class="somediv" v-if="isDesktop()">
                          <p
                            class="info-track-bottom"
                            v-if="content.histories.sti_remarks !== '' && content.is_cnx === false"
                          >{{content.histories.sti_remarks}}</p>
                          <p
                            class="info-track-bottom-disabled"
                            v-else-if="content.is_cnx === false"
                          >Paket telah tiba di (konsolidator asal), kota</p>
                          <p class="info-track-bottom" />
                          <p
                            class="info-track-bottom"
                            v-if="content.histories.del_remarks !== '' && content.is_cnx === false"
                          >{{content.histories.del_remarks}}</p>
                          <p
                            class="info-track-bottom-disabled"
                            v-else-if="content.is_cnx === false"
                          >Paket akan dikirim oleh (nama Kurir), kota</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="content-track-process"
                      v-else-if="content.histories === null && content.is_stt === true && content.is_exist === false"
                    >
                      <div class="track-result-not-found">
                        <div class="cloud-not-found" :style="cloudNotFound">
                          <img src="../../assets/box_not_found.png" class="box-not-found" />
                        </div>
                        <p class="package-not-available">Info paket Anda tidak tersedia</p>
                      </div>
                    </div>
                    <div
                      class="content-track-process"
                      v-else-if="content.histories === null && content.is_stt === false && content.is_exist === false"
                    >
                      <div class="track-result-not-found">
                        <img src="../../assets/process_track.png" class="process-track" />
                        <p class="package-not-available">Tunggu... paket Anda sedang diproses</p>
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
      <app-footer id="contact"></app-footer>
    </section>
    <app-bottom></app-bottom>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
      tracks: [],
      resultTrack: [],
      showLogo: false,
      show: true,
      showInput: true,
      showCancel: false,
      q: this.$route.query.q
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  beforeMount() {
    let newArr = this.toArrayOfObject();
    this.tracks = newArr;
    this.resultTrack = this.RESULT_TRACK;
    this.showLogo = true;
    this.showCancel = true;
  },
  computed: {
    ...mapGetters(["RESULT_TRACK", "TRACKS"])
  },
  methods: {
    newInput() {
      if (this.tracks.length === 5) {
        this.show = false;
        this.showCancel = true;
        alert("only track 5 shipment");
      } else {
        this.showLogo = true;
        this.showCancel = true;
        this.tracks.push({ track: null });
      }
    },
    toArrayOfObject() {
      const newArr = this.TRACKS.map(key => {
        return { track: key };
      });
      return newArr;
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
      this.tracks = [{ track: null }];
      this.show = true;
      this.showLogo = false;
      this.showCancel = false;
    },
    getTrackShipment() {
      const data = this.tracks.map(key => {
        return key.track;
      });
      const payload = {
        tracks: data
      };
      this.initTrackShipment(payload);
    },
    ...mapActions(["initTrackShipment"]),
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
    }
  }
};
</script>

<style scoped>
@import "./trackshipment.css";
</style>