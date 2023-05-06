<!-- Tu już jest ok  -->
<template>
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="image-wrapper">
          <img
            class="image-1"
            src="/images/istockphoto-1221568150-612x612.jpg"
          />
          <img
            class="image-2"
            src="/images/istockphoto-1221568150-612x612.jpg"
          />
          <img
            class="image-3"
            src="/images/istockphoto-1221568150-612x612.jpg"
          />
          <img
            class="image-4"
            src="/images/istockphoto-1221568150-612x612.jpg"
          />
        </div>
      </div>
      <div class="carousel-item">
        <div class="image-wrapper">
          <img
            class="image-1"
            src="/images/istockphoto-914345524-612x612.jpg"
          />
          <img
            class="image-2"
            src="/images/istockphoto-914345524-612x612.jpg"
          />
          <img
            class="image-3"
            src="/images/istockphoto-914345524-612x612.jpg"
          />
          <img
            class="image-4"
            src="/images/istockphoto-914345524-612x612.jpg"
          />
        </div>
      </div>
      <div class="carousel-item">
        <div class="image-wrapper">
          <img class="image-1" src="https://picsum.photos/id/1025/600/400" />
          <img class="image-2" src="https://picsum.photos/id/1025/600/400" />
          <img class="image-3" src="https://picsum.photos/id/1025/600/400" />
          <img class="image-4" src="https://picsum.photos/id/1025/600/400" />
        </div>
      </div>
      <div class="carousel-item">
        <div class="image-wrapper">
          <img
            class="image-1"
            src="/images/istockphoto-1043200194-612x612.jpg"
          />
          <img
            class="image-2"
            src="/images/istockphoto-1043200194-612x612.jpg"
          />
          <img
            class="image-3"
            src="/images/istockphoto-1043200194-612x612.jpg"
          />
          <img
            class="image-4"
            src="/images/istockphoto-1043200194-612x612.jpg"
          />
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  filter: grayscale(100%);
  width: 80vw;
}
.carousel:hover {
  filter: grayscale(0%);
}
.carousel-item {
  width: 70vw;
}
.image-wrapper {
  width: 600px;
  height: 60vh;
  position: relative;
  margin: 10vh;
}

.image-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 70vw;
  transform-origin: left;
}

.image-1 {
  clip-path: polygon(0 0, 0 32%, 28% 0);
  transform: translate(-10px, -10px);
  transition: transform 300ms ease;
  transform-origin: top;
  .image-wrapper:hover & {
    transform: translate(0, 0);
  }
}

.image-2 {
  clip-path: polygon(28% 0, 0 32%, 0 100%, 17% 100%, 90% 0);
  transform: translate(-30px, 5px);
  transition: transform 300ms ease;
  .image-wrapper:hover & {
    transform: translate(0, 0);
  }
}

.image-3 {
  clip-path: polygon(100% 0, 100% 65%, 74% 100%, 17% 100%, 90% 0);
  transform: translate(-15px, -10px);
  transition: transform 300ms ease;
  .image-wrapper:hover & {
    transform: translate(0, 0);
  }
}

.image-4 {
  clip-path: polygon(100% 65%, 74% 100%, 100% 100%);
  transform: translate(-32px, 5px);
  transition: transform 300ms ease;
  transform-origin: top;
  .image-wrapper:hover & {
    transform: translate(0, 0);
  }
}

@media (max-width: 1350px) {

  .carousel {
  filter: grayscale(100%);
  width: 97vw;
}
.carousel:hover {
  filter: grayscale(0%);
}
.carousel-item {
  width: 100vw;
}
.image-wrapper {
  width: 100vw;
  height: 60vh;
  margin: 5vh 0;
}

.image-wrapper img {
  width: 100vw;
}
}
</style>
