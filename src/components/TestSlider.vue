<template>
  <div class="sliderBlock">
    <swiper-vue
        class="swiper"
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        :keyboard="{ enabled: true }"
        :pagination="{ clickable: true }"
        :navigation="true"
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
      onSlideChange,
      pageNum
    }
  }
})
</script>

<style lang="scss" src="../styles/_taskSlider.scss"></style>
