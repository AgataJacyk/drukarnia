<template>
<ul>
  <li>
    <span>
      <h1>H</h1>
    </span>
    <h1>ome</h1>
  </li>
  <li>
    <span>
        <h1>O</h1>
    </span>
    <h1>ferta</h1>
  </li>
  <li>
    <span>
        <h1>P</h1>
    </span>
    <h1>romocje</h1>
  </li>
  <li>
    <span>
        <h1>A</h1>
    </span>
    <h1>rtyści</h1>
  </li>
  <li>
    <span>
      <h1>O</h1>
    </span>
    <h1>nas</h1>
  </li>
</ul>

</template>
<style scoped>
ul{
  position: absolute;
  right: 0;
  top: 20vh;
  padding: 0;
  list-style-type: none;
  text-align: left;
  white-space:nowrap;
  font-size: 200%;
  line-height: 1.9;
  color: #2d2d2d; 
  width: 280px;
  text-transform: capitalize;
}

li{
  height: 60px;
  transition: all .3s ease-out, color .2s .4s ease-out;
  background: #0d0d0d;
  margin-bottom: 2px;
  border-left: 4px solid #2d2d2d;
  box-shadow: 1px 1px 2px 2px rgba(0,0,0,.4);
}

li:hover{
  margin-left: -100%;
  cursor: pointer;
  border-left: 4px solid #F4DF48;
  color: #ffffff;
}

li:hover > span{
  color: #ffffff;
  transform: rotate(-5deg);
}

span{
  position: relative;
  display: block;
  width: 60px;
  height: 60px;
  text-align: center;
  float: left;
  line-height: 2.1;
  transition: all .2s .4s ease-out;
  font-size: 120%;
  margin: 0 3px;
  font-size: 95%;
}
</style>
