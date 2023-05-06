<template>
  <h1 class="artists">Artysci</h1>
  <div class="card mb-3 border-secondary bg-transparent">
    <div class="row g-0">
      <div class="col-md-5">
        <img
          src="images/istockphoto-1199849059-612x612.jpg"
          class="img-fluid rounded-start p-0"
          alt="..."
        />
      </div>
      <div class="col-md-7">
        <div class="card-body">
          <h1 class="card-title">Card title</h1>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class=" card border-secondary bg-transparent mb-3">
    <div class="row g-0">
      <div class="col-md-5">
        <img
          src="images/istockphoto-615517560-612x612.jpg"
          class="img-fluid rounded-start p-0"
          alt="..."
        />
      </div>
      <div class="col-md-7">
        <div class="card-body">
          <h1 class="card-title">Card title</h1>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.d-in
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

h1,
.artists {
  font-family: "ShadowedBlack";
  font-size: calc(36px + (48 - 36) * ((100vw - 300px) / (2865 - 300)));
  color: #7c7a7a;
  margin-top: 1vh;
}
.card-text {
  font-family: "Bellerose";
  font-size: calc(26px + (28 - 26) * ((100vw - 300px) / (2865 - 300)));
  margin: 5%;
}
.row {
  width: 100%;
}
.card {
  width: 70vw;
  margin: 4vw;
}
.col-md-5 {
  width: auto;
}
img {
  filter: grayscale(100%);
}
</style>
