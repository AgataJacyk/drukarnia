<!-- Tu pracuję-->
<template>
    <div class="card mb-3 border-secondary bg-transparent" style="max-width: 70vw;">
  <div class="row g-0">
    <div class="col-md-6">
      <img src="../../public/images/stop.png" class="img-fluid rounded-start" alt="znak stopu">
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h1 class="card-title"> STOP!</h1>
        <p class="card-text">Za daleko. Taka strona nie istnieje!</p>
        <router-link to="/"><button class="btn">Wróć do Strony Głównej</button></router-link>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
h1 {
    color:#8b8a8a;
    font-family: "ShadowedBlack";
    font-size: calc(86px + (94 - 86) * ((100vw - 300px) / (2865 - 300)));
}
img {
    width: 70%;
}
p {
    font-size: calc(48px + (56 - 48) * ((100vw - 300px) / (2865 - 300)));
}
.btn {
--border: 5px;    /* the border width */
  --slant: 0.7em;   /* control the slanted corners */
  --color: #606263; /* the color */

  font-family: "Bellerose";
font-size: calc(36px + (42 - 36) * ((100vw - 300px) / (2865 - 300)));
padding-bottom: 20px;
text-align: center;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: var(--color);
  background: 
     linear-gradient(to bottom left,var(--color)  50%,#0000 50.1%) top right,
     linear-gradient(to top   right,var(--color)  50%,#0000 50.1%) bottom left;
  background-size: calc(var(--slant) + 1.3*var(--border)) calc(var(--slant) + 1.3*var(--border));
  background-repeat: no-repeat;
  box-shadow:
    0 0 0 200px inset var(--s,#0000),
    0 0 0 var(--border) inset var(--color);
  clip-path: 
      polygon(0 0, calc(100% - var(--slant)) 0, 100% var(--slant),
              100% 100%, var(--slant) 100%,0 calc(100% - var(--slant))
             );
  transition: color var(--t,0.3s), background-size 0.3s;
}
.btn:focus-visible {
  outline-offset: calc(-1*var(--border));
  outline: var(--border) solid #000c;
  clip-path: none;
  background-size: 0 0;
}
.btn:hover,
.btn:active{
  background-size: 100% 100%;
  color: #fff;
  --t: 0.2s 0.1s;
}
.btn:active {
  --s: #0005;
  transition: none;
}
.btn {
    text-align: center;
}
.card {
    margin: 10vh 4vw;
}
.card-title, .card-text, .btn {
    margin: 2% 5%;
}
.row { 
    width: 70vw;
    margin: 10vh 4vw;
}
img {
    filter: grayscale(100%);
}
@media (max-width: 1350px) {
.row {
  width: 90vw;
  margin: 10vh 4vw;
}
}
</style>