<template>
  <div class="chartWrap">
    <div class="chartWrap__header">
      <p class="chartWrap__title">{{ title }}</p>
      <div class="chartWrap__select">
        <span class="chartWrap__selectName">{{ selectName }}</span>
        <img :src="arrowDown" alt="" class="chartWrap__arrowDown">
      </div>
    </div>
    <div>
      <div class="chart-wrap">
        <div id="chart">
          <apexchart type="donut" width="450" :options="chartOptions" :series="chartSeries"></apexchart>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import arrowDown from '@/assets/svgs/arrowDown.svg'

export default {
  name: "ChartWrap",
  props: {
    chartSeries: {
      type: Array,
    },
    title: {
      type: String
    },
    selectName: {
      type: String
    }

  },
  setup() {
    const chartOptions = {
      colors: ['#43BCCD', '#6D32A5'],
      chart: {
        width: 380,
        type: 'donut',
      },
      stroke: {
        width: 0,
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: "58%",
          }
        }
      },
      labels: ['Completed due date (3)', 'Nearing due date (2)'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        position: 'left',
        offsetY: 0,
        height: 200,
      }
    }

    return {
      chartOptions,
      arrowDown
    }
  }
}
</script>

<style scoped lang="scss">
.chartWrap {
  border-radius: 30px;
  box-shadow: 0 3px 26px #00000008;
  background-color: #ffff;
  box-sizing: border-box;
  padding: 30px;
  max-width: 579px;
  width: 100%;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
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
}

.chart-wrap {
  margin-top: 70px;
}
</style>