<template>
  <div class="taskStatistics">
    <TestSlider/>
    <div class="taskStatistics__wrapper">
      <div class="taskStatistics__header">
        <p class="taskStatistics__title">Current state</p>
        <div class="taskStatistics__select">
          <span class="taskStatistics__selectName">All</span>
          <img :src="arrowDown" alt="" class="taskStatistics__arrowDown">
        </div>
      </div>
      <div class="taskStatistics__percentsBlock">
        <div class="taskStatistics__completedTasks" v-for="detail in statisticDetails" :key="detail.id"
             :class="{'taskStatistics__completedTasks--withBorder': detail.withBorder}">
          <div class="taskStatistics__content">
            <img :src="detail.ico" alt="" class="taskStatistics__completedIco">
            <div class="tasksStatistics__statistic">
              <p class="taskStatistics__percent">{{ detail.percent }}</p>
              <p class="taskStatistics__name">{{ detail.name }}</p>
            </div>
          </div>
          <div class="taskStatistics__info" :class="{'taskStatistics__info--centered' : !detail.withBorder}">
            <p class="taskStatistics__tasksCount">
              <span class="taskStatistics__tasks">{{ detail.text }}</span> <span class="taskStatistics__count">{{ detail.num }}</span>
            </p>
            <p class="taskStatistics__tasksCount" v-if="detail.withBorder">
              <span class="taskStatistics__tasks">{{ detail.desc }}</span> <span class="taskStatistics__count">{{detail.descPercent}}</span>
            </p>
          </div>

        </div>
      </div>
      <div class="taskStatistics__chartContainer">
        <div class="taskStatistics__chartFirstLine"></div>
        <div class="taskStatistics__chartSecondLine"></div>
        <div class="taskStatistics__chartThirdLine"></div>
      </div>
      <ul class="taskStatistics__chartList">
        <li class="taskStatistics__firstItem">Current state</li>
        <li class="taskStatistics__secondItem">Agreed timing</li>
        <li class="taskStatistics__thirdItem">Time left</li>
      </ul>
    </div>
  </div>

</template>

<script>
import arrowDown from '@/assets/svgs/arrowDown.svg'
import completedIcon from '@/assets/svgs/completed.svg'
import dayToGoIcon from '@/assets/svgs/daysToGo.svg'
import TestSlider from "@/components/TestSlider";

export default {
  name: "TaskStatistics",
  components: {
    TestSlider
  },
  setup() {
    const statisticDetails = [
      {
        id: 1,
        ico: completedIcon,
        percent: '79%',
        name: 'completed',
        withBorder: true,
        text: 'Tasks',
        num: '36/48',
        desc: 'Completion rate',
        descPercent: '-8%',

      },
      {
        id: 2,
        ico: dayToGoIcon,
        percent: '22',
        name: 'days to go',
        withBorder: false,
        text: 'Transition timeframe',
        num: '56 days',
      }
    ]
    return {
      arrowDown,
      statisticDetails,
      completedIcon,
      dayToGoIcon,
    }
  }
}
</script>

<style scoped lang="scss">
.taskStatistics {
  max-width: 1652px;
  width: 100%;
  margin: 0 auto 30px;
  display: flex;
  justify-content: space-between;

  &__wrapper {
    border-radius: 30px;
    box-shadow: 0 3px 26px #00000008;
    background-color: #ffff;
    box-sizing: border-box;
    padding: 30px;
    max-width: 579px;
    width: 100%;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 200px;
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
  }

  &__selectName {
    margin-right: 10px;
    font-size: 13px;
  }

  &__completedTasks {
    width: 50%;
    padding-right: 15px;

    &--withBorder {
      border-right: 1px solid #A3A6B9;
    }

    &:nth-child(2) {
      padding-left: 15px;
    }
  }

  &__completedIco {
    margin-right: 24px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    padding: 25px 30px 40px;
  }

  &__percentsBlock {
    display: flex;
    justify-content: space-around;
  }

  &__percent {
    font-size: 60px;
    color: #05081D;
    margin: 0;
    font-weight: 600;
  }

  &__name {
    color: #A3A6B9;
    font-size: 12px;
    text-transform: uppercase;
    margin: 0;
  }

  &__tasksInfo {
    display: flex;
    justify-content: space-between;
  }

  &__tasksCount {
    text-align: center;
  }

  &__tasks {
    font-size: 13px;
    color: #05081D;
    font-weight: 600;
  }

  &__count {
    color: #6A6C78;
  }

  &__tasksCount {
    font-size: 13px;
  }

  &__info {
    display: flex;
    justify-content: space-between;

    &--centered {
      justify-content: center;
    }
  }

  &__chartContainer {
    display: flex;
    width: 100%;
    border-radius: 15px;
    position: relative;
    height: 10px;
    margin-top: 25px;
  }

  &__chartFirstLine {
    width: 70%;
    height: 100%;
    background: #43BCCD;
    z-index: 3;
    position: absolute;
    border-radius: 15px;

  }
  &__chartSecondLine {
    width: 85%;
    height: 100%;
    background: #6D32A5;
    z-index: 2;
    position: absolute;
    border-radius: 15px;

  }
  &__chartThirdLine {
    width: 100%;
    height: 100%;
    background: #F53361;
    z-index: 1;
    position: absolute;
    border-radius: 15px;
  }

  &__chartList {
    padding: 0 0 0 15px;
    display: flex;
    justify-content: space-between;
  }

  &__firstItem, &__secondItem, &__thirdItem {
    font-size: 13px;
    font-weight: 600;
    color: #05081D;
    list-style: none;
  }

  &__firstItem {
    &::before {
      display: inline-block;
      content: '';
      border-radius: 25px;
      height: 16px;
      width: 16px;
      margin-right: 20px;
      background-color: #43BCCD;

    }

  }
  &__secondItem {
    &::before {
      display: inline-block;
      content: '';
      border-radius: 25px;
      height: 16px;
      width: 16px;
      margin-right: 20px;
      background-color: #6D32A5;
    }
  }

    &__thirdItem {
      &::before {
        display: inline-block;
        content: '';
        border-radius: 25px;
        height: 16px;
        width: 16px;
        margin-right: 20px;
        background-color: #F53361;
      }
    }

}

</style>