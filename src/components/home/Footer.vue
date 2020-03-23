<template>
  <div>
    <div class="content">
      <div class="columns">
        <div class="column">
          <p class="title">Lion Parcel</p>
          <div class="content-subtitle">
            <p class="subtitle">Tentang Kami</p>
            <p class="subtitle">Faq</p>
            <p class="subtitle">Karir</p>
            <p class="subtitle">Komunitas</p>
          </div>
        </div>
        <div class="column">
          <p class="title">Kontak Kami</p>
          <div class="content-subtitle">
            <div class="content-icon">
              <img src="../../assets/locPin.png" class="icons" />
              <p class="subtitle">
                Head Office
                <br />Jl. Agave Raya No. 55
                <br />Kedoya Selatan,
                <br />Jakarta Barat 11520
              </p>
            </div>
            <div class="content-icon">
              <img src="../../assets/phone.png" class="icons" />
              <p class="subtitle">
                <b>Office</b>
                <br />+62-21-580939
              </p>
            </div>
            <div class="content-icon">
              <div class="customer-service">
                <p class="subtitle">
                  <b>Customer Service</b>
                  <br />+62-21-22580868
                  <br />+62-21-80820072
                </p>
              </div>
            </div>

            <div class="content-icon">
              <img src="../../assets/mail.png" class="icons" />
              <p class="subtitle">
                customercare
                <br />@lionparcel.com
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="content-icon">
            <br />
            <img src="../../assets/clock.png" class="icons" />
            <p class="subtitle">
              Monday to Sunday
              <br />07:00 AM to 23:00 PM
            </p>
          </div>
        </div>
        <div class="column">
          <p class="title">Ikuti Kami</p>
          <div class="social">
            <img src="../../assets/twitter.png" class="social-media" />
            <img src="../../assets/fb.png" class="social-media" />
            <img src="../../assets/instagram.png" class="social-media" />
          </div>
        </div>
        <div class="column">
          <p class="getapp">Dapatkan Aplikasinya</p>
          <div class="img-content">
            <img src="../../assets/playstore.png" class="img-playstore" />
            <img src="../../assets/appstore.png" class="img-appstore" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

.content-subtitle {
  display: flex;
  flex-direction: column;
  line-height: normal;
  letter-spacing: normal;
}
.img-playstore {
  width: 140px;
  height: 40px;
  object-fit: contain;
}
.img-appstore {
  width: 120px;
  height: 40px;
  object-fit: contain;
}
.img-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.title {
  font-weight: bold;
  font-size: 16px;
  object-fit: contain;
  font-family: "Poppins", sans-serif;
  font-stretch: normal;
  font-style: normal;
  padding-left: 10px;
  line-height: normal;
  letter-spacing: normal;
}
.subtitle {
  font-size: 12px;
  object-fit: contain;
  padding-left: 10px;
  text-align: justify;
  font-family: "Poppins", sans-serif;
  font-stretch: normal;
  font-style: normal;
}
.getapp {
  font-weight: bold;
  font-size: 18px;
  object-fit: contain;
  font-family: "Poppins", sans-serif;
  font-stretch: normal;
  text-align: right;
  padding-right: 10px;
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
  padding-left: 10px;
}
.icons {
  width: 16px;
  height: 16px;
}

.content-icon {
  display: flex;
  flex-direction: row;
  margin: 7px;
}
.customer-service{
  padding-left: 14px;
}
</style>