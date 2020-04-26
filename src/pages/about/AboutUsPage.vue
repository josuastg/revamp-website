<template>
  <div>
    <section class="section-content">
      <div class="content-breadcrumb-about">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="/">
                  <img src="../../assets/home.png" class="icon-home" />
                </a>
              </li>
              <li class="is-active">
                <a href="/about" aria-current="page" class="route-breadcrumb">About Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="about-story-content">
        <div class="left-leaf-about">
          <div class="red-leaf-about" :style="greenLeaf">
            <div class="red-leaf-small-about" :style="purpleLeaf"></div>
          </div>
          <div class="ellipse-about" :style="ellipse" />
        </div>
        <div class="container">
          <section class="section-content">
            <div class="content-about">
              <div class="container">
                <div class="columns">
                  <div class="column">
                    <p class="text-who-are">Siapakah</p>
                    <p class="text-us">Kami</p>
                    <div class="content-text-sender">
                      <div class="red-line" />
                      <p class="text-sender">
                        Pengiriman termurah
                        se-Indonesia
                      </p>
                    </div>
                  </div>
                  <div class="column">
                    <p class="history-text">{{historyOne}}</p>
                    <p class="history-text">{{historyTwo}}</p>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <img class="blue-book" src="../../assets/book_pen.png"/>
                  </div>
                  <div class="column">
                    <div class="bg-gray-value">
                      <div class="columns">
                        <div class="column">
                          <div class="content-value">
                            <p class="value-company">
                              Nilai
                              Perusahaan
                            </p>
                            <div class="content-description">
                              <div class="content-value-company">
                                <p class="title-value-company">Kolaborasi adalah Kunci</p>
                                <p
                                  class="subtitle-value-company"
                                >Kerja sama, komunikasi dan koordinasi yang dilandasi kepercayaan merupakan hal penting bagi kami untuk bersama mencapai visi perusahaan</p>
                              </div>
                              <div class="content-value-company">
                                <p class="title-value-company">Dimulai Dari “Ide”</p>
                                <p
                                  class="subtitle-value-company"
                                >Kami menciptakan ide dan gagasan baru dengan memanfaatkan peluang untuk menghasilkan kontribusi dan benefit yang luas bagi perusahaan</p>
                              </div>
                              <div class="content-value-company">
                                <p class="title-value-company">Peduli Sesama</p>
                                <p
                                  class="subtitle-value-company"
                                >Menunjukkan rasa kepedulian terhadap sesama rekan kerja dan lingkungan perusahaan dengan sikap gotong royong dan menjaga reputasi perusahaan</p>
                              </div>
                              <div class="content-value-company">
                                <p class="title-value-company">Tumbuh Dan Terus Tumbuh</p>
                                <p
                                  class="subtitle-value-company"
                                >Kami berkomitmen untuk senantiasa mengembangkan perusahaan berikut sumber daya manusia dengan memberikan kesempatan untuk pengembangan diri, kompetensi, karir, penghargaan atas pencapaian dan prestasi</p>
                              </div>
                              <div class="content-value-company">
                                <p class="title-value-company">Melayani Adalah Tugas Semua Orang</p>
                                <p
                                  class="subtitle-value-company"
                                >Kami berkomitmen memberikan pelayanan terbaik dan berkualitas dalam membantu mitra dan konsumen untuk tumbuh dan berkembang dengan memberikan solusi dan inspirasi</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="column"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="right-leaf">
          <img src="../../assets/right_leaf.png" class="red-leaf" />
        </div>
      </div>
    </section>
    <app-border></app-border>
    <section class="section">
      <app-footer  id="contact"></app-footer>
    </section>
    <app-bottom></app-bottom>
  </div>
</template>

<script>
import Border from "../../components/border/Border";
import Footer from "../../components/footer/Footer";
import Bottom from "../../components/bottom/Bottom";
export default {
  components: {
    "app-border": Border,
    "app-footer": Footer,
    "app-bottom": Bottom
  },
  data() {
    return {
      greenLeaf: {
        backgroundImage: `url(${require("../../assets/red_leaf_.png")})`
      },
      purpleLeaf: {
        backgroundImage: `url(${require("../../assets/red_leaf_.png")})`
      },
      ellipse: {
        backgroundImage: `url(${require("../../assets/ellipse.png")})`
      },
      redLeaf: {
        backgroundImage: `url(${require("../../assets/red_leaf.png")})`
      },
      secondRedLeaf: {
        backgroundImage: `url(${require("../../assets/second_red_leaf.png")})`
      },
      historyOne:
        "Lion Parcel didirikan pada tanggal 14 Februari 2013. Bergerak di bidang jasa titipan yang melayani pengiriman domestik dan internasional yang didukung oleh jaringan dan infrastruktur Lion Group sebagai salah satu maskapai penerbangan terbesar. Sebagai bagian dari Lion Group, Lion Parcel mengemban misi untuk mengembangkan lini usaha di bidang industri Logistik dengan falsafah untuk membantu percepatan pertumbuhan ekonomi di seluruh area di Indonesia.",
      historyTwo:
        "Lion Parcel memiliki modal jaringan dan operasional yang terpercaya dengan dukungan armada pesawat dan frekuensi penerbangan yang tinggi dari Lion Group sebagai linehaul ke hampir seluruh bandar udara di Indonesia. Saat ini, Lion Parcel memiliki 3500 mitra yang tersebar di seluruh Indonesia untuk membantu masyarakat terhubung tanpa batas waktu dan jarak."
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    created() {
      window.addEventListener("resize", this.isMobile);
      this.isMobile();
      this.isDesktop();
    },
    destroyed() {
      window.addEventListener("resize", this.isMobile);
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
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
@import "./aboutuspage.css";
</style>