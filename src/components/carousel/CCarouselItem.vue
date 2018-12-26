<template>
  <div class="c-carousel-i" ref="carouselItem" :style="itemStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'CCarouselItem',
    props: {},
    data() {
      return {
        itemStyle: {
          marginLeft: '0px',
        }
      };
    },
    mounted() {
      let w = this.$refs.carouselItem.clientWidth;
      this.itemStyle.marginLeft = `-${w / 2}px`;
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  .c-carousel-i {
    width: 80%;
    min-height: 100%;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 50%;
    color: #fff;
    overflow: hidden;
    transition: transform 0.5s, opacity 0.5s;
    &:hover {
      opacity: 1 !important;
    }
  }
</style>


