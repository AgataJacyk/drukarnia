<template>
  <section class="vh-100; bg-transparent style=max-width: 600px;">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <p>
            <span class="h2">Shopping Cart </span
            ><span class="h4">(1 item in your cart)</span>
          </p>

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
                    <p
                      class="small text-muted mb-4 pb-2"
                      style="color: #606060"
                    >
                      Name
                    </p>
                    <p class="lead fw-normal mb-0">iPad Air</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Color</p>
                    <p class="lead fw-normal mb-0">
                      <i class="fas fa-circle me-2" style="color: #606060"></i>
                      pink rose
                    </p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p
                      class="small text-muted mb-4 pb-2"
                      style="color: #606060"
                    >
                      Quantity
                    </p>
                    <p class="lead fw-normal mb-0">1</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Price</p>
                    <p class="lead fw-normal mb-0">$799</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Total</p>
                    <p class="lead fw-normal mb-0">$799</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-5 border-secondary bg-transparent">
            <div class="card-body p-4">
              <div class="float-end">
                <p
                  class="mb-0 me-5 d-flex align-items-center"
                  style="color: #606060"
                >
                  <span class="small text-muted me-2" style="color: #606060"
                    >Order total:</span
                  >
                  <span class="lead fw-normal" style="color: #606060"
                    >$799</span
                  >
                </p>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="border-secondary bg-transparent"
              style="color: #606060"
            >
              Continue shopping
            </button>
            <button
              type="button"
              class="border-secondary bg-transparent"
              style="color: #606060"
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
p {
  color: #606060;
}
</style>
