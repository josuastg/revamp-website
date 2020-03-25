<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://lionparcel.com/">
          <img src="../assets/lion_parcel_logo.png" />
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
          <router-link to="/agent" class="navbar-item">
            <h6 v-bind:style="textStyleAgent" v-on:click="changeTextColorAgent">Agent</h6>
          </router-link>
          <router-link to="/community" class="navbar-item">
            <h6 v-bind:style="textStyleCommunity" v-on:click="changeTextColorCommunity">Community</h6>
          </router-link>
          <router-link to="/career" class="navbar-item">
            <h6 v-bind:style="textStyleCareers" v-on:click="changeTextColorCareers">Careers</h6>
          </router-link>
          <router-link to="/" class="navbar-item">
            <h6 v-bind:style="textStyleFAQ" v-on:click="changeTextColorFAQ">FAQ</h6>
          </router-link>
          <router-link to="/" class="navbar-item">
            <h6 v-bind:style="textStyleContactUs" v-on:click="changeTextColorContactUs">Contact Us</h6>
          </router-link>
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
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

.container {
  align-items: stretch;
  display: flex;
  min-height: 3.25rem;
  width: 100%;
  font-weight: bold;
}
h6 {
  font-family: "Poppins", sans-serif;
}
</style>