<!-- tu pracuje -->
<template>
    <img class="logo" src="/images/logo.png" />
<ul>
  <li><router-link to="/">
    <span><h1>H</h1></span>
    Home</router-link>
  </li>
  <li><router-link to="/Offer">
    <span><h1>O</h1></span>
    Oferta</router-link>
  </li>
  <li><router-link to="/Proms">
    <span><h1>P</h1></span>
    Promocje</router-link>
  </li>
  <li><router-link to="/Artists">
    <span><h1>A</h1></span>
    Artyści</router-link>
  </li>
  <li><router-link to="/AboutUs">
    <span><h1>O</h1></span>
   O nas</router-link>
  </li>
  <li><router-link to="/Contact">
    <span><h1>K</h1></span>
   Kontakt</router-link>
  </li>
  <li><router-link to="/Cart">
    <span><h1>K</h1></span>
   Koszyk</router-link>
  </li>
</ul>

</template>
<style scoped>

a { 
  text-decoration: none;
  color:#7c7a7a39;
}

ul{
  position: fixed;
  right: 5vw;
  top: 15vh;
  padding: 0;
  list-style-type: none;
  text-align: left;
  white-space:nowrap;
  font-size: 300%;
  line-height: 1.9;
  color: #2d2d2d; 
  width: 350px;
  text-transform: capitalize;
  z-index: 10;
}

li{
  height: 100px;
  transition: all .3s ease-out, color .2s .4s ease-out;
  background: #1B1A18;
  margin-bottom: 5px;
  border-left: 4px solid #2d2d2d;
  box-shadow: 1px 1px 2px 2px rgba(0,0,0,.4);
  font-family: "Bellerose";
}

li h1 { 
    padding: 60% 0;
    font-family: "ShadowedBlack";
    color: #7c7a7a;
}

li:hover{
  margin-left: -100%;
  cursor: pointer;
  border-left: 10px solid #252422;
  color: #ffffff;
}

li:hover > span{
  color: #ffffff;
  transform: rotate(-5deg);
}

li:hover > a {
  color: #7c7a7a;
}

span{
  position: relative;
  display: block;
  width: 60px;
  height: 100px;
  text-align: center;
  float: left;
  line-height: 2.1;
  transition: all .2s .4s ease-out;
  font-size: 120%;
  margin: 0 3px;
  font-size: 95%;
}

.logo {
    height: 10vh;
    width: auto;
    margin-left: 4vw;
}
</style>
