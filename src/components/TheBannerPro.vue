<template>
    <a-carousel arrows>
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>
      <div class="carousel-image"><h3>1</h3></div>
      <div class="carousel-image"><h3>2</h3></div>
      <div class="carousel-image"><h3>3</h3></div>
      <div class="carousel-image"><h3>4</h3></div>
    </a-carousel>
  </template>
  
  <style scoped>
 a-carousel {
  width: 100vw; /* Chiều rộng là 100% chiều rộng của viewport */
}
  /* For demo */
  :deep(.slick-slide) {
    text-align: center;
    height: 88.8vh;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }
  
  :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    transition: ease all 0.3s;
    opacity: 0.3;
    z-index: 1;
  }
  :deep(.slick-arrow.custom-slick-arrow:before) {
    display: none;
  }
  :deep(.slick-arrow.custom-slick-arrow:hover) {
    color: #fff;
    opacity: 0.5;
  }
  
  :deep(.slick-slide h3) {
    color: #fff;
  }
  </style>