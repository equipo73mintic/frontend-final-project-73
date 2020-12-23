<template>
  <div class="container">
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img src="@/assets/ImagenesLogos/utp.png" height="100" width="250" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/ImagenesLogos/unicauca.jpg" height="100" width="250" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/ImagenesLogos/unicordoba.png" height="100" width="250" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/ImagenesLogos/mintic.png" height="100" width="250" alt="" />
        </div>
        
        <div class="slide">
          <img src="@/assets/ImagenesLogos/utp.png" height="100" width="250" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/ImagenesLogos/unicauca.jpg" height="100" width="250" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/ImagenesLogos/unicordoba.png" height="100" width="250" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/ImagenesLogos/mintic.png" height="100" width="250" alt="" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingCustomers",
};
</script>

<style>
@-webkit-keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(calc(-250px * 4));
            transform: translateX(calc(-250px * 4));
  }
}

@keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(calc(-250px * 4));
            transform: translateX(calc(-250px * 4));
  }
}
.slider {
  background: pr;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 960px;
}
.slider::before, .slider::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  -webkit-transform: rotateZ(180deg);
          transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  -webkit-animation: scroll 40s linear infinite;
          animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider .slide {
  height: 100px;
  width: 250px;
}
</style>