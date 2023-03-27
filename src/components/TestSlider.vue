<template>
  <div class="sliderBlock">
    <swiper-vue
        class="swiper"
        :modules="modules"
        :slides-per-view="1"
        :space-between="30"
        :keyboard="{ enabled: true }"
        :pagination="{ clickable: true }"
        :navigation="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        swiper.animating=true
    >
      <div class="sliderBlock__nav">
        <div class="sliderBlock__selectWrapper">
          <p class="sliderBlock__title">due date</p>
          <div class="sliderBlock__select">
            <span class="sliderBlock__selectName">All</span>
            <img src="@/assets/svgs/arrowDown.svg" alt="" class="sliderBlock__arrowDown handle">
          </div>
        </div>
        <div class="sliderBlock__arrows">
          <img src="@/assets/svgs/arrowPrev.svg" alt="" class="sliderBlock__arrowPrev" @click="onSwiper">
          <span class="sliderBlock__number">{{ pageNum }}/2</span>
          <img src="@/assets/svgs/arrowNext.svg" alt="" class="sliderBlock__arrowNext" @click="onSwiper">
        </div>

      </div>

      <swiper-slide class="slide">

        <div class="sliderBlock__slider">
          <div>
            <div class="sliderBlock__header">
              <p class="sliderBlock__date">Oct 6th, 2020</p>
              <p class="sliderBlock__section">aidjv</p>
            </div>
            <h1 class="sliderBlock__mainTitle">
              Title of the task with a short description
            </h1>
            <div class="sliderBlock__main">
              <div class="sliderBlock__desc">
                <p class="sliderBlock__subTitle">Name of the project</p>
                <p class="sliderBlock__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fuga labore
                  laudantium nemo omnis optio quo similique sunt ut voluptatum! Aut doloremque eius error itaque neque
                  soluta totam veniam voluptas.</p>
              </div>
              <div class="sliderBlock__icons">
                <img src="@/assets/svgs/sliderView.svg" alt="" class="sliderBlock__downloadIcon">
                <img src="@/assets/svgs/sliderDownload.svg" alt="" class="sliderBlock__viewIcon">
              </div>
            </div>
            <div class="sliderBlock__footer">
              <div class="sliderBlock__filters">
                <div class="sliderBlock__filteredItem">
                  <img src="@/assets/svgs/sliderMessage.svg" alt="" class="sliderBlock__filteredIcon">
                  <span class="sliderBlock__filteredName">10 comments</span>
                </div>
                <div class="sliderBlock__filteredItem">
                  <img src="@/assets/svgs/fileUpload.svg" alt="" class="sliderBlock__filteredIcon">
                  <span class="sliderBlock__filteredName">5 attachments</span>
                </div>
                <div class="sliderBlock__filteredItem">
                  <img src="@/assets/svgs/time.svg" alt="" class="sliderBlock__filteredIcon">
                  <span class="sliderBlock__filteredName">Normal priority</span>
                </div>
                <div class="sliderBlock__filteredItem">
                  <img src="@/assets/svgs/clitical.svg" alt="" class="sliderBlock__filteredIcon">
                  <span class="sliderBlock__filteredName">High criticality</span>
                </div>
              </div>
              <div class="sliderBlock__sliderInfo">
                <span class="sliderBlock__infoText">Integrated with Jira</span>
                <img src="@/assets/svgs/arrowDown.svg" alt="" class="sliderBlock__jiraLogo">
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
        <div class="sliderBlock__slider">
          <div>
            <div class="sliderBlock__header">
              <p class="sliderBlock__date">Oct 6th, 2020</p>
              <p class="sliderBlock__section">aidjv</p>
            </div>
            <h1 class="sliderBlock__mainTitle">
              Title of the task with a short description
            </h1>
            <div class="sliderBlock__main">
              <div class="sliderBlock__desc">
                <p class="sliderBlock__subTitle">Name of the project</p>
                <p class="sliderBlock__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fuga labore
                  laudantium nemo omnis optio quo similique sunt ut voluptatum! Aut doloremque eius error itaque neque
                  soluta totam veniam voluptas.</p>
              </div>
              <div class="sliderBlock__icons">
                <img src="@/assets/svgs/sliderView.svg" alt="" class="sliderBlock__downloadIcon">
                <img src="@/assets/svgs/sliderDownload.svg" alt="" class="sliderBlock__viewIcon">
              </div>
            </div>
            <div class="sliderBlock__footer">
              <div class="sliderBlock__filters">
                <div class="sliderBlock__filteredItem">
                  <img src="@/assets/svgs/sliderMessage.svg" alt="" class="sliderBlock__filteredIcon">
                  <span class="sliderBlock__filteredName">10 comments</span>
                </div>
                <div class="sliderBlock__filteredItem">
                  <img src="@/assets/svgs/fileUpload.svg" alt="" class="sliderBlock__filteredIcon">
                  <span class="sliderBlock__filteredName">5 attachments</span>
                </div>
                <div class="sliderBlock__filteredItem">
                  <img src="@/assets/svgs/time.svg" alt="" class="sliderBlock__filteredIcon">
                  <span class="sliderBlock__filteredName">Normal priority</span>
                </div>
                <div class="sliderBlock__filteredItem">
                  <img src="@/assets/svgs/clitical.svg" alt="" class="sliderBlock__filteredIcon">
                  <span class="sliderBlock__filteredName">High criticality</span>
                </div>
              </div>
              <div class="sliderBlock__sliderInfo">
                <span class="sliderBlock__infoText">Integrated with Jira</span>
                <img src="@/assets/svgs/arrowDown.svg" alt="" class="sliderBlock__jiraLogo">
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-vue>


  </div>
</template>

<script>
import {ref} from 'vue';
import { defineComponent } from 'vue'
import { Pagination, Navigation, Keyboard } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
export default defineComponent({
  name: 'swiper-example-keyboard-control',
  title: 'Keyboard control',
  url: import.meta.url,
  setup() {
    const pageNum = ref(1)
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      if(pageNum.value === 1) {
        pageNum.value++
      }
      else if(pageNum.value === 2) {
        pageNum.value--
      }
      console.dir(Pagination);
    };
    return {
      modules: [Pagination, Navigation, Keyboard],
      onSwiper,
      onSlideChange,
      pageNum
    }
  }
})
</script>

<style lang="scss">

.sliderBlock {
  max-width: 1047px;
  width: 100%;
  border-radius: 30px;
  box-shadow: 0 3px 26px #00000008;
  background-color: #ffff;
  position: relative;
  padding: 30px;
  margin-right: 30px;

  //&__arrows {
  //  max-width: 87px;
  //  width: 100%;
  //  position: absolute;
  //  top: 26px;
  //  right: 20px;
  //  display: flex;
  //  justify-content: center;
  //}
  //
  //&__arrowNext {
  //  visibility: hidden;
  //}
  //
  //&__arrowPrev {
  //  visibility: hidden;
  //}

  &__slider {
    border-radius: 30px;
    box-sizing: border-box;
    padding: 30px;
    background-color: #ffff;
    box-shadow: rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px;
    margin-top: 45px;
  }

  &__selectWrapper {
    display: flex;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
    position: absolute;
    top: 0;
    padding: 15px;
  }

  &__title {
    font-size: 15px;
    color: #A3A6B9;
    text-transform: uppercase;
    margin: 0;
  }

  &__select {
    padding: 0 10px;

    &--withBorder {
      border-right: 1px solid black;
    }
  }

  &__selectName {
    margin-right: 10px;
    font-size: 13px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &__icons {
    display: flex;
    column-gap: 10px;
  }

  &__main {
    display: flex;
  }

  &__date {
    color: #43BCCD;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
  }

  &__section {
    color: #05081D;
    font-weight: 600;
    margin: 0;
  }

  &__mainTitle {
    color: #05081D;
    font-size: 26px;
    font-weight: 600;
  }

  &__subTitle {
    color: #43BCCD;
    text-transform: uppercase;
    font-size: 12px;
    margin: 0;
  }

  &__text {
    color: #A3A6B9;
    font-size: 13px;
    line-height: 24px;
    margin-right: 44px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    width: 100%;
  }

  &__filteredItem {
    display: flex;
    align-items: center;
  }

  &__filteredIcon {
    margin-right: 10px;
  }

  &__filteredName {
    color: #05081D;
    font-size: 13px;
    font-weight: 700;
  }

  &__number {
    margin: 0 10px;
  }
}

.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 0 !important;
}

.swiper-pagination-bullet-active {
  background: #000 !important;
}

.swiper-horizontal {
  border-radius: 15px;
  height: 340px;
}
.swiper-button-next {
  right: 14px;
  left: auto;
  position: absolute;
  top: 40px;
  width: 10px;
  height: 10px;
  color: #000;
}
.swiper-button-prev {
  right: 64px;
  left: auto;
  position: absolute;
  top: 40px;
  width: 10px;
  height: 10px;
  color: #000;
}

.swiper-button-next::after {
  font-size: 14px;
}
.swiper-button-prev::after {
  font-size: 14px;
}

</style>
