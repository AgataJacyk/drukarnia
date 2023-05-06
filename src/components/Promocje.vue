<template>

<div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card  card border-secondary mb-3 bg-transparent text-center">
      <div class="card-body">
        <h2 class="card-title">Special title treatment</h2>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn text-center">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card  card border-secondary mb-3 bg-transparent text-center">
      <div class="card-body">
        <h2 class="card-title">Special title treatment</h2>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn text-center">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card  card border-secondary mb-3 bg-transparent text-center">
      <div class="card-body">
        <h2 class="card-title">Special title treatment</h2>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn text-center">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card  card border-secondary mb-3 bg-transparent text-center">
      <div class="card-body">
        <h2 class="card-title">Special title treatment</h2>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn text-center">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card  card border-secondary mb-3 bg-transparent text-center">
      <div class="card-body">
        <h2 class="card-title">Special title treatment</h2>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn text-center">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card  card border-secondary mb-3 bg-transparent text-center">
      <div class="card-body">
        <h2 class="card-title">Special title treatment</h2>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn text-center">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
h2 {
    color:#8b8a8a;
    font-family: "ShadowedBlack";
}
.btn {
--border: 5px;    /* the border width */
  --slant: 0.7em;   /* control the slanted corners */
  --color: #606263; /* the color */

  font-family: "Bellerose";
font-size: calc(24px + (28 - 24) * ((100vw - 300px) / (2865 - 300)));
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
.card-title, .card-text, .btn {
    text-align: center;
}
.row { 
    width: 70vw;
    margin: 5vh 4vw;
}
</style>