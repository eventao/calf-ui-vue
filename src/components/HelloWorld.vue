<template>
  <div class="hello">
    <c-carousel :height="'400px'">
      <c-carousel-item v-for="(item,i) of carouses" :key="i">
        <div class="carousel-i">
          {{item}}
        </div>
      </c-carousel-item>
    </c-carousel>
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
          '第一屏',
          '第二屏',
          '第三屏',
          '第四屏',
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
    .carousel-i{
      width:100%;
      height:400px;
      font-size:20px;
      display:flex;
      justify-content: center;
      align-items: center;
      color:#fff;
      background-color:rgba(0,53,6,1);
    }
  }
</style>
