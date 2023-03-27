<template>
  <div class="container">
    <TheSideBar/>
    <div class="mainContent">
      <TheNav/>
      <TheHeader/>
      <NewTask/>
      <ColumnCarts/>
      <LineChart/>
      <RateCharts/>
      <RecentTransitions/>
      <TaskStatistics/>
      <TasksApproval/>
    </div>
  </div>
</template>

<script>
import TheNav from './layout/TheNav.vue'
import TheHeader from './layout/TheHeader.vue'
import NewTask from "@/components/NewTask";
import ColumnCarts from "@/components/ColumnCarts";
import LineChart from "@/components/LineChart";
import RateCharts from "@/components/RateCharts";
import RecentTransitions from "@/components/RecentTransitions";
import TaskStatistics from "@/components/TaskStatistics";
import TasksApproval from "@/components/TasksApproval";
import TheSideBar from "@/layout/TheSideBar";

export default {
  name: 'App',
  components: {
    TheNav,
    TheHeader,
    NewTask,
    ColumnCarts,
    LineChart,
    RateCharts,
    RecentTransitions,
    TaskStatistics,
    TasksApproval,
    TheSideBar,
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" src="./utils/_global.scss"></style>
