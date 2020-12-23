<template>
  <div class="row">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      </ol>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/imagenesCarrusel/img1.png" class="d-block w-100"  />
          <div class="carousel-caption ">
            <button
                type="button"
                class="btn btn-light btnInfo"
              >
              <p class="textInfo">Contactanos</p>
              </button>
          </div>
        </div>
        
        <div class="carousel-item">
          <img src="@/assets/imagenesCarrusel/img3.png" class="d-block w-100"  />
          <div class="carousel-caption" style="margin-top: 50px">
            
          </div>
        </div>
      </div>

      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </a>

      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingCarousel",
};
</script>

<style>
.btnInfo{
  background-color: #355a2a;
  height: 28px;
}
.textInfo{
  /* color: #ffffff  !important; */
  text-align: center;
}

#carouselExampleCaptions{
  width: 100%
}

</style>