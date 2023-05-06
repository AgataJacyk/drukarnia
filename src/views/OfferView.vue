<!-- Tu pracuję w ofercie będą promocje + pakiety -->
<template>
 <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card border-secondary mb-3 bg-transparent">
      <div class="card-body text-secondary bg-transparent">
        <h2 class="card-title bg-transparent">Card title</h2>
        <p class="card-text bg-transparent">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn text-center">Go somewhere</a>
    </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-secondary mb-3 bg-transparent">
      <div class="card-body text-secondary bg-transparent">
        <h2 class="card-title bg-transparent">Card title</h2>
        <p class="card-text bg-transparent">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn text-center">Go somewhere</a>
    </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-secondary mb-3 bg-transparent">
      <div class="card-body text-secondary bg-transparent">
        <h2 class="card-title bg-transparent">Card title</h2>
        <p class="card-text bg-transparent">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn text-center">Go somewhere</a>
    </div>
    </div>
  </div>
</div>
<table class="table table-dark table-hover">
    <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>    
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>    
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>
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

.row, table {
  width: 70vw;
}
.row-cols-md-3, .row-cols-1, table {
    margin-left: 4vw;
}

table {
    color: #ffff;
    margin-top: 10vh;
}
</style>
