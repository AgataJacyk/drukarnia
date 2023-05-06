<template>
  <section class="vh-100; bg-transparent style=max-width: 600px;">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
            <span><h2>Shopping Cart</h2></span>
            <span><p>(1 item in your cart)</p></span>
          <div class="card mb-4 border-secondary bg-transparent">
            <div class="card-body p-4">
              <div class="row align-items-center">
                <div class="col-md-2">
                  <img
                    src="images/1.jpg"
                    class="img-fluid"
                    alt="Generic placeholder image"
                  />
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p>
                      Name
                    </p>
                    <p class="lead fw-normal mb-0">iPad Air</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p>Color</p>
                    <p class="lead fw-normal mb-0">
                      <i class="fas fa-circle me-2" style="color: #606060"></i>
                      pink rose
                    </p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p>
                      Quantity
                    </p>
                    <p class="lead fw-normal mb-0">1</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p>Price</p>
                    <p class="lead fw-normal mb-0">$799</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p>Total</p>
                    <p class="lead fw-normal mb-0">$799</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-5 border-secondary bg-transparent">
            <div class="card-body p-4">
              <div class="float-end">
                
                  <span class="small text-muted me-2"
                    ><b>Order total:</b></span
                  >
                  <span class="lead fw-normal"
                    >$799</span
                  >
                
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn"
            >
              Continue shopping
            </button>
            <button
              type="button"
              class="btn"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  max-width: 70vw;
  margin-left: 4vw;
  font-family: "Bellerose";
  font-size: calc(26px + (28 - 26) * ((100vw - 300px) / (2865 - 300)));
  color: #606060;
}
span {
  color: #606060
}
p {
  color: #606060;
}


.btn {
--border: 5px;    /* the border width */
  --slant: 0.7em;   /* control the slanted corners */
  --color: #606263; /* the color */

font-family: "Bellerose";
font-size: calc(26px + (32 - 26) * ((100vw - 300px) / (2865 - 300)));
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
  margin: 0 7px;
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
</style>
