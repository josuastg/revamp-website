<template>
  <div>
    <!-- <div class="footer"> -->
      <div class="content">
        <div class="columns">
          <div class="column">
            <p class="title">Lion Parcel</p>
            <div class="content-subtitle">
              <p class="subtitle">About Us</p>
              <p class="subtitle">Faq</p>
              <p class="subtitle">Career</p>
            </div>
          </div>
          <div class="column">
            <p class="title">Contact Us</p>
            <div class="content-subtitle">
              <p class="subtitle">
                Head Office
                <br />Jl. Agave Raya No. 55
                <br />Kedoya Selatan,
                <br />Jakarta Barat 11520
              </p>
              <p class="subtitle">
                <b>Office</b>
                <br />+62-21-580939
              </p>
              <p class="subtitle">customercare@lionparcel.com</p>
            </div>
          </div>
          <div class="column">
            <br />
            <p class="subtitle">
              Monday to Sunday
              <br />07:00 AM to 23:00 PM
            </p>
          </div>
          <div class="column">
            <p class="title">Follow Us</p>
            <div class="social">
              <img src="../../assets/twitter.png" class="social-media" />
              <img src="../../assets/fb.png" class="social-media" />
              <img src="../../assets/instagram.png" class="social-media" />
            </div>
          </div>
          <div class="column">
            <p class="getapp">Get the app</p>
            <div class="img-content">
              <img src="../../assets/playstore.png" class="img-playstore" />
              <img src="../../assets/appstore.png" class="img-appstore" />
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: white;
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.content-subtitle {
  display: flex;
  flex-direction: column;
  line-height: normal;
  letter-spacing: normal;
}
.img-playstore {
  width: 160px;
  height: 43px;
  object-fit: contain;
}
.img-appstore {
  width: 140px;
  height: 43px;
  object-fit: contain;
}
.img-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.title {
  font-weight: bold;
  font-size: 20px;
  object-fit: contain;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.subtitle {
  font-size: 16px;
  object-fit: contain;
  text-align: justify;
  font-stretch: normal;
  font-style: normal;
}
.getapp {
  font-weight: bold;
  font-size: 18px;
  object-fit: contain;
  font-stretch: normal;
  text-align: right;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.social-media {
  flex-direction: row;
  width: 16px;
  height: 16px;
  margin: 3px;
  display: flex;
  align-self: center;
}
.social {
  flex-direction: row;
  display: flex;
  align-self: center;  
}
</style>