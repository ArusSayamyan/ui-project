<template>
  <div class="rateCharts">
    <chart-wrap :chartSeries="[55, 20]" title="Tasks review rate" selectName="All phases"></chart-wrap>
    <ColoredColumnCharts/>
  </div>
</template>

<script>
import ChartWrap from "@/components/ChartWrap";
import ColoredColumnCharts from "@/components/ColoredColumnCharts";

export default {
  name: "RateCharts",
  components: {
    ChartWrap,
    ColoredColumnCharts
  },
  setup() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.rateCharts {
  max-width: 1652px;
  width: 100%;
  margin: 0 auto 30px;
  display: flex;
  justify-content: space-between;
}
</style>