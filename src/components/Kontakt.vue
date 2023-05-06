<template>
  <h1 class="title-location">Lokalizacja</h1>
  <div
    class="card border-secondary bg-transparent"
    style="width: 67vw; height: 100%; margin: 4vw; padding: 0"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.1831648784!2d18.581716676716567!3d54.38907967261007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd73bd51f21f8b%3A0x50c8a05c9778d809!2sUniwersytet%20WSB%20Merito%20Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1683369224203!5m2!1spl!2spl"
      width="100%"
      height="450"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="card-body">
      <h5 class="card-title">Skontaktuj sie z nami</h5>
      <p class="card-text">
        <br />Adres: Aleja Grunwaldzka 313 <br />Telefon: 0 700 0000 <br />
        Email: xxx@gmail.com
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title-location {
  font-family: "ShadowedBlack";
  font-size: calc(36px + (48 - 36) * ((100vw - 300px) / (2865 - 300)));
  color: #7c7a7a;
  margin-top: 1vh;
  margin-left: 4vw;
  padding: 20px;
}
.card-body {
  width: 60vw;
  margin-left: 4vw;
}
.card,
iframe {
}
.card-title,
.card-text {
  font-family: "Bellerose";
  font-size: calc(26px + (28 - 26) * ((100vw - 300px) / (2865 - 300)));
  color: #7c7a7a;
}
</style>
