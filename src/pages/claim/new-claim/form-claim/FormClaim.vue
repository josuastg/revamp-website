<template>
  <div class="container">
    <div class="content-claim-form">
      <div class="card">
        <div class="inside-margin">
          <div class="card-content">
            <p class="ship-title-new-claim">ID Pengiriman</p>
            <input class="input" type="text" placeholder="Contoh: 11-12-12345" />
            <p class="ship-title-new-claim">Klaimer</p>
            <div class="field">
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select>
                    <option>Pengirim</option>
                    <option>Penerima</option>
                    <option>Lainnya</option>
                  </select>
                </div>
              </div>
            </div>
            <p class="ship-title-new-claim">Nama Lengkap</p>
            <input class="input" type="text" placeholder="Masukan nama lengkap." />
            <div class="columns">
              <div class="column">
                <p class="title-file">Akun Bank</p>
                <div class="upload-file" @click="$refs.file.click()" v-if="!image">
                  <img src="../../../../assets/uploads.png" class="icon-uploads" />
                  <input type="file" ref="file" style="display: none" @change="onFileChange" />
                  <p class="upload-text">Upload Photo</p>
                </div>
                <div class="content-image-load" v-else>
                  <img :src="image" class="image-load" />
                </div>
                <p class="upload-text" @click="removeImage" v-show="cancelPhoto">Cancel</p>
              </div>
              <div class="column">
                <p class="title-file">KTP</p>
                <div class="upload-file" @click="$refs.file.click()" v-if="!ktp">
                  <img src="../../../../assets/uploads.png" class="icon-uploads" />
                  <input type="file" ref="file" style="display: none" @change="onFileChangeKtp" />
                  <p class="upload-text">Upload KTP</p>
                </div>
                <div class="content-image-load" v-else>
                  <img :src="ktp" class="image-load" />
                </div>
                <p class="upload-text" @click="removeImageKtp" v-show="cancelKtp">Cancel</p>
              </div>
            </div>
            <p class="ship-title-new-claim">Tipe Klaim</p>
            <div class="field">
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option>MBG</option>
                    <option>Kerusakan (Damaged)</option>
                    <option>Kehilangan (Missing)</option>
                  </select>
                </div>
              </div>
            </div>
            <img src="../../../../assets/example_captcha.png" class="example-captcha" />
            <p class="ship-title-new-claim">Masukkan Simbol</p>
            <div class="input-captcha">
              <input class="input" type="text" />
            </div>

            <p class="claim-information-document">
              Dengan menekan tombol diatas maka saya setuju untuk mengikuti syarat
              dan ketentuan yang berlaku sesuai dengan
              <a>Dokumen ini</a>
            </p>
            <div class="btn-submit">
              <router-link :to="{name : 'successClaim', query: {id_claim :2312321}}">
                <div class="buttons are-medium">
                  <app-red-button title="Kirim"></app-red-button>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RedButton from "../../../../components/button/RedButton";
export default {
  data() {
    return {
      image: "",
      ktp: "",
      cancelPhoto: false,
      cancelKtp: false
    };
  },
  components: {
    "app-red-button": RedButton
  },
  beforeMount() {
    var vm = this;
    console.log("before mounted");
    this.removeImage();
    this.removeImageKtp();
    vm.get("img");
  },
  methods: {
    get(key) {
      this.image = localStorage.getItem(key);
      this.ktp = localStorage.getItem(key);
    },
    set(key) {
      try {
        localStorage.setItem(key, this.image);
        localStorage.setItem(key, this.ktp);
      } catch (e) {
        alert(`Storage failed: ${e}`);
      }
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.cancelPhoto = true;
      this.createImage(files[0]);
    },
    onFileChangeKtp(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.cancelKtp = true;
      this.createImageKtp(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;
      reader.onload = e => {
        this.image = e.target.result;
        console.log("isi image", this.image);
        vm.set("img");
      };
      reader.readAsDataURL(file);
    },
    createImageKtp(file) {
      var reader = new FileReader();
      var vm = this;
      reader.onload = e => {
        this.ktp = e.target.result;
        console.log("isi image", this.ktp);
        vm.set("img");
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.image = "";
      this.showing = false;
      localStorage.removeItem("img");
    },
    removeImageKtp() {
      this.ktp = "";
      this.cancelKtp = false;
      localStorage.removeItem("img");
    }
  }
};
</script>

<style scoped>
@import "./formclaim.css";
</style>