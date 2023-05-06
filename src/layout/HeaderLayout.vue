<!-- tu pracuje -->
<template>
    <img class="logo" src="/images/logo.png" />
    <input type="checkbox" class="toggler" />
    <div class="hamburger"><div></div></div>
    <div class="menu">
      <div class="mynav">
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
</div>
</div>


</template>


<style lang="scss" scoped>
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
input { 
  display: hidden;
}

.logo {
    height: 10vh;
    width: auto;
    margin: 1rem 4vw;
}
input {
  opacity: 0;
}

@media (max-width: 1350px) {
  img {
    margin-top: -50px;
  }
  .toggler {
    z-index: 2;
    height: 100px;
    width: 100px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    opacity: 0;
  }
  .hamburger {
    position: absolute;
    top: 0;
    right: 0;
    height: 100px;
    width: 100px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      position: relative;
      top: 0;
      right: 0;
      background: #8b8a8a;
      height: 5px;
      width: 60%;
      transition: all 0.4s ease;
      &::before {
        content: "";
        position: absolute;
        top: -10px;
        background: #8b8a8a;
        width: 100%;
        height: 5px;
        transition: all 0.4s ease;
      }
      &::after {
        content: "";
        position: absolute;
        top: -10px;
        background: #8b8a8a;
        width: 100%;
        height: 5px;
        transition: all 0.4s ease;
        top: 10px;
      }
    }
  }
  .toggler:checked + .hamburger > div {
    background: rgba(0, 0, 0, 0);
    &::before {
      top: 0;
      transform: rotate(45deg);
      background: #8b8a8a;
      z-index: 2;
      position: absolute;
    }
    &::after {
      top: 0;
      transform: rotate(135deg);
      background: #8b8a8a;
      z-index: 2;
      position: absolute;
    }
  }
  .menu {
    background: linear-gradient(180deg, #1B1A18 0%, #252422 100%);
    width: 0;
    height: 0;
    margin-top: 0;
    position: relative;
    z-index: 10;
  }
  .toggler:checked ~ .menu {
    width: 50vw;
    max-width: 50vw;
    height: 50vh;
    position: absolute;
    top: 20vh;
    right: 30px;
  }
  .menu > div > ul {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    visibility: hidden;
    > li {
      list-style: none;
      width: 100%;
      margin-top: 40px;
      font-size: calc(32px + (46 - 32) * ((100vw - 300px) / (1550 - 300)));
      font-size: calc(32px + (46 - 32) * ((100vw - 300px) / (1550 - 300)));
    }
  }
}
</style>
