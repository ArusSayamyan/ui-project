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

<style scoped lang="scss" src="../styles/_taskStatistics.scss"></style>