<template>
  <div class="carousel" ref="carousel" :style="carouselStyle" @click="carouseClick($event)">
    <slot></slot>
    <div class="go p" @click="prev()">
      前
    </div>
    <div class="go n" @click="next()">
      后
    </div>
  </div>
</template>

<script>

  export default {
    name: 'CCarousel',
    props: {
      interval: Number,
      height: String,
      value: Number,
    },
    data() {
      return {
        carouselStyle: {
          height: 'auto',
          minHeight: '430px'
        },
        currentIndex: 0,
        total: 0,
        carouselTimeout:null,
      };
    },
    mounted() {
      let that = this;
      if (that.height) {
        that.carouselStyle.height = this.height;
        that.carouselStyle.minHeight = this.height;
      }
      that.init();
    },
    methods: {
      init() {
        let that = this;
        that.$children.forEach((el, i) => {
          el.$el.style.zIndex = i + 1;
        });
        this.total = that.$children.length;
        this.setCarouselChange();
      },
      next() {
        this.resetPrev();
        if (this.currentIndex < this.total - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
        this.setCarouselChange();
        this.$emit('input', this.currentIndex);
      },
      prev() {
        this.resetPrev();
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.total - 1;
        }
        this.setCarouselChange();
        this.$emit('input', this.currentIndex);
      },
      resetPrev() {
        let that = this;
        that.$children.forEach(item => {
          item.$el.style.transform = 'translateX(0) scaleY(1)';
          item.$el.style.opacity = '0';
          item.$el.style.zIndex = '2';
        });
      },
      setCarouselChange() {
        let that = this, cl = that.$children.length,
          max = cl - 1,
          currI = max - this.currentIndex,
          currEle = that.$children[currI];
        currEle.$el.style.transform = 'translateX(0) scale(1)';
        currEle.$el.style.opacity = '1';
        currEle.$el.style.zIndex = cl + 1;

        let prev = currI >= max ? 0 : currI + 1;
        let next = currI <= 0 ? max : currI - 1;
        let conWidth = this.$refs.carousel.clientWidth;
        let preEle = that.$children[prev].$el;
        let nEle = that.$children[next].$el;
        let subW = (conWidth - preEle.clientWidth) / 2;

        preEle.style.transform = `translateX(-${subW}px) scaleY(0.8)`;
        preEle.style.opacity = 0.6;
        preEle.style.zIndex = 2;

        nEle.style.transform = `translateX(${subW}px) scaleY(0.8)`;
        nEle.style.opacity = 0.6;
        nEle.style.zIndex = 2;

        if (this.interval > 0) {
          clearTimeout(this.carouselTimeout);
          this.runAuto();
        }

      },
      runAuto() {
        this.carouselTimeout = setTimeout(() => {
          this.next(() => {
            this.runAuto();
          });
        }, this.interval);
      },
      carouseClick(e){
        let param = e;
        let w = this.$refs.carousel.clientWidth;

        if(param.layerX / w > 0.8){
          this.next();
        }else if(param.layerX / w < 0.2){
          this.prev();
        }
      }
    },
    watch:{
      value(curr){
        this.currentIndex = curr;
        this.resetPrev();
        this.setCarouselChange();
      }
    }
  }
</script>

<style scoped lang="less">
  .carousel {
    width: 100%;
    min-height: 430px;
    height: auto;
    position: relative;
    .go{
      width: 0.20rem;
      height: 0.20rem;
      top: 50%;
      margin-top: -0.1rem;
      border-radius: 50%;
      font-size: .12rem;
      background-color:rgba(0,0,0,0.3);
      display:flex;
      justify-content: center;
      align-items: center;
      color:#fff;
      position:absolute;
      z-index:1;
      cursor:pointer;
      user-select: none;
      &.p{
        left:.15rem;
      }
      &.n{
        right:.15rem;
      }
    }
  }
</style>


