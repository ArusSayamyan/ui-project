<template>
  <div class="coloredColumnCharts">
    <div class="coloredColumnCharts__header">
      <p class="coloredColumnCharts__title">Completion rate</p>
      <div class="coloredColumnCharts__select">
        <span class="coloredColumnCharts__selectName">All</span>
        <img :src="arrowDown" alt="" class="coloredColumnCharts__arrowDown">
      </div>
    </div>
    <div id="chart">
      <apexchart type="bar" height="320" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
import arrowDown from '@/assets/svgs/arrowDown.svg'

export default {
  name: "ColoredColumnCharts",
  setup() {
    const series = [{
      name: 'Completed on time',
      data: [5, 4, 3, 2]
    }, {
      name: 'Completed over due date',
      data: [1.5, 3, 2, 0.4]
    }, {
      name: 'Not completed',
      data: [1, 0.5, 4.1, 4.5]
    }]
    const chartOptions = {
      chart: {
        type: 'bar',
        height: 150,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '35%',
          endingShape: 'rounded',
          borderRadius: 12,
          markers: {
            size: 0,
            colors: undefined,
            strokeColors: '#fff',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            showNullDataPoints: true,
            hover: {
              size: undefined,
              sizeOffset: 3
            }
          }

        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['tasks', 'knowledge transfer', 'production parallel', 'live execution'],
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: ['#43BCCD', '#6D32A5', '#F53361'],
          radius: 12,
          offsetX: 0,
          offsetY: 0
        },
      },

      yaxis: {
        min: 0,
        max: 6,
        tickAmount: 3
      },
      fill: {
        colors: ['#43BCCD', '#6D32A5', '#F53361'],
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    }
    return {
      series,
      chartOptions,
      arrowDown
    }
  }
}
</script>

<style scoped lang="scss">
.coloredColumnCharts {
  position: relative;
  max-width: 1198px;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 30px;
  box-shadow: 0 3px 26px #00000008;
  background-color: #ffff;
  margin-left: 30px;
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

</style>