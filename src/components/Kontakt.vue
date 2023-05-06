<template>
  <h1 class="title-location">Lokalizacja</h1>
  <div class="card" style="width: 18rem">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.1831648784!2d18.581716676716567!3d54.38907967261007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd73bd51f21f8b%3A0x50c8a05c9778d809!2sUniwersytet%20WSB%20Merito%20Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1683369224203!5m2!1spl!2spl"
      width="600"
      height="450"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.map-container {
  width: 70vw;
  margin-left: 4vw;
}
.title-location {
  font-family: "ShadowedBlack";
  font-size: calc(36px + (48 - 36) * ((100vw - 300px) / (2865 - 300)));
  color: #7c7a7a;
  margin-top: 1vh;
  margin-left: 4vw;
  padding: 20px;
}
</style>
