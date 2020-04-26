<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../../assets/lion_parcel_logo.png" />
        </a>
        <a
          role="button"
          class="navbar-burger is-danger burger"
          aria-label="menu"
          v-on:click="expandClick"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
            <h6 v-bind:style="textStyleHome" v-on:click="changeTextColorHome">Home</h6>
          </router-link>
          <router-link to="/about" class="navbar-item">
            <h6 v-bind:style="textStyleAbout" v-on:click="changeTextColorAbout">About Us</h6>
          </router-link>
          <a @click="goToAgent()" class="navbar-item">
            <h6 v-bind:style="textStyleAgent">Agent</h6>
          </a>
          <a @click="goToCommunity()" class="navbar-item">
            <h6 v-bind:style="textStyleCommunity">Community</h6>
          </a>
          <a @click="goToNetwork()" class="navbar-item">
            <h6 v-bind:style="textStyleCommunity">Network</h6>
          </a>
          <!-- <a href="/career" class="navbar-item">
            <h6 v-bind:style="textStyleCareers" v-on:click="changeTextColorCareers">Careers</h6>
          </a>
          <a to="/faq" class="navbar-item">
            <h6 v-bind:style="textStyleFAQ" v-on:click="changeTextColorFAQ">FAQ</h6>
          </a>-->
          <a href="#contact" class="navbar-item">
            <h6 v-bind:style="textStyleContactUs" v-on:click="changeTextColorContactUs">Contact Us</h6>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      indicator: true,
      textStyleHome: {
        color: "black",
        fontWeight: "bold"
      },
      textStyleAgent: {
        color: "black",
        fontWeight: "bold"
      },
      textStyleAbout: {
        color: "black",
        fontWeight: "bold"
      },
      textStyleCommunity: {
        color: "black",
        fontWeight: "bold"
      },
      textStyleCareers: {
        color: "black",
        fontWeight: "bold"
      },
      textStyleFAQ: {
        color: "black",
        fontWeight: "bold"
      },
      textStyleContactUs: {
        color: "black",
        fontWeight: "bold"
      }
    };
  },
  methods: {
    expandClick() {
      document.querySelector(".navbar-menu").classList.toggle("is-active");
      document.querySelector(".navbar-burger").classList.toggle("is-active");
    },
    changeTextColorHome() {
      if (this.indicator) {
        this.textStyleAgent.color = "black";
        this.textStyleAbout.color = "black";
        this.textStyleCommunity.color = "black";
        this.textStyleCareers.color = "black";
        this.textStyleFAQ.color = "black";
        this.textStyleContactUs.color = "black";
        this.textStyleHome.color = "#d11f40";
      } else {
        this.textStyleHome.color = "black";
      }
    },
    changeTextColorAbout() {
      if (this.indicator) {
        this.textStyleAgent.color = "black";
        this.textStyleHome.color = "black";
        this.textStyleCommunity.color = "black";
        this.textStyleCareers.color = "black";
        this.textStyleFAQ.color = "black";
        this.textStyleContactUs.color = "black";
        this.textStyleAbout.color = "#d11f40";
      } else {
        this.textStyleAbout.color = "black";
      }
    },
    changeTextColorAgent() {
      if (this.indicator) {
        this.textStyleAbout.color = "black";
        this.textStyleHome.color = "black";
        this.textStyleCommunity.color = "black";
        this.textStyleCareers.color = "black";
        this.textStyleFAQ.color = "black";
        this.textStyleContactUs.color = "black";
        this.textStyleAgent.color = "#d11f40";
      } else {
        this.textStyleAgent.color = "black";
      }
    },
    changeTextColorCommunity() {
      if (this.indicator) {
        this.textStyleAbout.color = "black";
        this.textStyleHome.color = "black";
        this.textStyleAgent.color = "black";
        this.textStyleCareers.color = "black";
        this.textStyleFAQ.color = "black";
        this.textStyleContactUs.color = "black";
        this.textStyleCommunity.color = "#d11f40";
      } else {
        this.changeTextColorCommunity.color = "black";
      }
    },
    changeTextColorCareers() {
      if (this.indicator) {
        this.textStyleAbout.color = "black";
        this.textStyleHome.color = "black";
        this.textStyleCommunity.color = "black";
        this.textStyleAgent.color = "black";
        this.textStyleFAQ.color = "black";
        this.textStyleContactUs.color = "black";
        this.textStyleCareers.color = "#d11f40";
      } else {
        this.textStyleCareers.color = "black";
      }
    },
    changeTextColorFAQ() {
      if (this.indicator) {
        this.textStyleAbout.color = "black";
        this.textStyleHome.color = "black";
        this.textStyleCommunity.color = "black";
        this.textStyleCareers.color = "black";
        this.textStyleContactUs.color = "black";
        this.textStyleAgent.color = "black";
        this.textStyleFAQ.color = "#d11f40";
      } else {
        this.textStyleFAQ.color = "black";
      }
    },
    changeTextColorContactUs() {
      if (this.indicator) {
        this.textStyleAbout.color = "black";
        this.textStyleHome.color = "black";
        this.textStyleCommunity.color = "black";
        this.textStyleCareers.color = "black";
        this.textStyleFAQ.color = "black";
        this.textStyleAgent.color = "black";
        this.textStyleContactUs.color = "#d11f40";
      } else {
        this.changeTextColorContactUs.color = "black";
      }
    },
    goToCommunity() {
      window.open("https://sites.google.com/view/lio-akademi/beranda");
    },
    goToAgent() {
      window.open("http://lionparcel.com/agen");
    },
    goToNetwork() {
      window.open("http://lionparcel.com/network");
    }
  }
};
</script>

<style scoped>
@import "./navbar.css";
</style>