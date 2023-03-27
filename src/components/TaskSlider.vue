<template>
  <div class="sliderBlock">
    <div class="sliderBlock__nav">
      <div class="sliderBlock__selectWrapper">
        <p class="sliderBlock__title">due date</p>
        <div class="sliderBlock__select">
          <span class="sliderBlock__selectName">All</span>
          <img src="@/assets/svgs/arrowDown.svg" alt="" class="sliderBlock__arrowDown handle">
        </div>
      </div>
      <div>
        <img src="@/assets/svgs/arrowPrev.svg" alt="" class="sliderBlock__arrowDown handle" @click="previousSlide"
             v-if="carouselNumber > 1">
        <span class="sliderBlock__number">{{ carouselNumber }}/{{ carouselDatas.length }}</span>
        <img src="@/assets/svgs/arrowNext.svg" alt="" class="sliderBlock__arrowDown handle" @click="nextSlide"
             v-if="carouselNumber < carouselDatas.length">
      </div>
    </div>
    <transition
        :name="transitionName"
        mode="out-in">
      <div class="sliderBlock__slider" :key="carouselNumber" @mousemove="nextSlide">
        <div>
          <div class="sliderBlock__header">
            <p class="sliderBlock__date">Oct 6th, 2020</p>
            <p class="sliderBlock__section">{{ slideActive.text }}</p>
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

    </transition>

    <div class="sliderBlock__dots">
      <div class="dot dot--1" @click="previousSlide"></div>
      <div class="dot dot--2" @click.stop="nextSlide"></div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      carouselNumber: 1,
      direction: 'next',
    };
  },
  computed: {
    carouselDatas() {
      return [
        {
          text: 'UI /UX DESIGNER',
        },
        {
          text: 'UI /UX DESIGNER',
        },
      ]
    },
    slideActive() {
      return this.carouselDatas[this.carouselNumber - 1]
    },
    transitionName() {
      return `fade-${this.direction}`
    },
    ActiveDotCoordinate() {
      return `calc(${parseInt(100 * (this.carouselNumber - 1))}% + ${parseFloat(0.3 * (this.carouselNumber - 1))}rem)`;
    },
  },
  methods: {
    nextSlide() {
      this.direction = 'next'
      this.carouselNumber++
      this.handleNextDot();
      if (this.carouselNumber === 2) {
        console.log(document.querySelector(".dot--2"))
      }
    },

    previousSlide() {
      this.direction = 'prev'
      this.carouselNumber--
      this.handlePreviousDot();
    },
    handleNextDot() {
      document.querySelector('.dot--1').style.background = 'none';
      document.querySelector('.dot--1').style.borderColor = 'black';
      document.querySelector('.dot--2').style.background = 'black';
    },
    handlePreviousDot() {
      document.querySelector('.dot--2').style.background = 'none';
      document.querySelector('.dot--2').style.borderColor = 'black';
      document.querySelector('.dot--1').style.background = 'black';
    },
  },
};
</script>

<style scoped lang="scss">

.sliderBlock {
  max-width: 1047px;
  width: 100%;
  border-radius: 30px;
  box-shadow: 0 3px 26px #00000008;
  background-color: #ffff;
  position: relative;
  padding: 30px;
  margin-right: 30px;

  &__slider {
    border-radius: 30px;
    box-sizing: border-box;
    padding: 30px;
    background-color: #ffff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
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

.sliderBlock__dots {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 38px;

  .dot {
    width: 13px;
    height: 13px;
    border: 1px solid #000;
    border-radius: 50%;
    will-change: transform;
    transform: translateX(0);
    transition: transform .2s;

    &:not(:last-of-type) {
      margin-right: .3rem;
    }

    &--1 {
      background-color: #000;
    }
  }
}

.fade-next-enter-active,
.fade-next-leave-active {
  transition: .4s;
}

.fade-next-enter {
  transform: translateX(10%);
  opacity: 0;
}

.fade-next-leave-to {
  transform: translateX(-10%);
  opacity: 0;
}

.fade-prev-enter-active,
.fade-prev-leave-active {
  transition: .4s;
}

.fade-prev-enter {
  transform: translateX(-10%);
  opacity: 0;
}

.fade-prev-leave-to {
  transform: translateX(10%);
  opacity: 0;
}</style>