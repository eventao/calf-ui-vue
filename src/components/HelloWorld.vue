<template>
  <div class="hello">
    <div class="carousel-w">
      <c-carousel :height="'400px'">
        <c-carousel-item v-for="(item,i) of carouses" :key="i">
          <div class="carousel-i">
            <img :src="item.img" alt="">
          </div>
        </c-carousel-item>
      </c-carousel>
    </div>
  </div>
</template>

<script>
  import CCarousel from './carousel/Carousel';
  import CCarouselItem from './carousel/CCarouselItem';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        carouses:[
          {img:require('../assets/images/gd318-1.jpg')},
          {img:require('../assets/images/gd318-2.jpg')},
          {img:require('../assets/images/gd318-3.jpg')},
          {img:require('../assets/images/gd318-4.jpg')},
          {img:require('../assets/images/gd318-5.jpg')},
          {img:require('../assets/images/gd318-6.jpg')},
          {img:require('../assets/images/gd318-7.jpg')},
        ],
      }
    },
    components:{
      CCarousel,
      CCarouselItem
    }
  }
</script>

<style scoped lang="less">
  .hello{
    .carousel-w{
      width:800px;
      height:auto;
      margin:0 auto;
    }
    .carousel-i{
      width:100%;
      height:400px;
      font-size:20px;
      display:flex;
      justify-content: center;
      align-items: center;
      color:#fff;
      background-color: rgb(53, 52, 52);
    }
  }
</style>
