<template>
  <div class="container">
    <div class="style-download">
      <p class="download">Unduh Aplikasi Lion Parcel</p>
      <p class="sub-download">Kirim paket melalui ponsel Anda dan lacak kiriman anda</p>
      <div class="store">
        <img src="../../assets/playstore.png" class="img-store" />
        <img src="../../assets/appstore.png" class="img-store" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

@media (min-width: 320px) {
  .download {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    color: #d11f40;
  }
}
@media (min-width: 600px) {
  .download {
    font-size: 18px;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    color: #d11f40;
  }
}

@media (min-width: 320px) {
  .sub-download {
    object-fit: contain;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    width: 230px;
    text-align: center;
    align-self: center;
    height: 40px;
    font-style: normal;
    font-weight: bold;
  }
}
@media (min-width: 600px) {
  .sub-download {
    object-fit: contain;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    width: 230px;
    text-align: left;
    height: 40px;
    font-style: normal;
    font-weight: bold;
  }
}
@media (min-width: 320px) {
  .store {
    flex-direction: row;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;
  }
}

@media (min-width: 600px) {
  .store {
    flex-direction: row;
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }
}
.img-store {
  width: 104px;
  height: 30px;
  object-fit: contain;
}

.style-download {
  display: flex;
  flex-direction: column;
}
</style>