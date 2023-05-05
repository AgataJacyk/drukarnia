
<!-- Tu pracuję  -->
<template>
<div class="container-fluid">
<h2>Ostatnie prace</h2>
  <div class="row">
    <div class="col-lg-3">
    <img src="/images/istockphoto-914345616-612x612.jpg" />
    </div>
    <div class="col-lg-3">
        <img src="/images/istockphoto-146745759-612x612.jpg" />
    </div>
    <div class="col-lg-3">
        <img src="/images/istockphoto-1221568150-612x612.jpg" />
    </div>
  </div>
  <div class="row">
    <div class="col-lg-3">
    <img src="/images/istockphoto-545775574-612x612.jpg" />
    </div>
    <div class="col-lg-3">
        <img src="/images/istockphoto-1043200194-612x612.jpg" />
    </div>
    <div class="col-lg-3">
        <img src="/images/istockphoto-1218505360-612x612.jpg" />
    </div>
  </div>
</div>
</template>

<style scoped>
h2 {
    font-family: "ShadowedBlack";
}
.container-fluid { 
    width: 92vw;
    margin: 10vh 4vw;
    padding: 0;
}
.row {
    width: 90vw;
}
img {
    width: 100%;
    filter: grayscale(100%);
}
.col-lg-3:hover img {
    filter: grayscale(0%);
}
</style>