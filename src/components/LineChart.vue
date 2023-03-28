<template>
  <div class="lineChart">
    <div class="lineChart__header">
      <p class="lineChart__title">cycle time</p>
      <div class="lineChart__select lineChart__select--withBorder">
        <span class="lineChart__selectName">All</span>
        <img :src="arrowDown" alt="" class="lineChart__arrowDown">
      </div>
      <div class="lineChart__select">
        <span class="lineChart__selectName">Current state</span>
        <img :src="arrowDown" alt="" class="lineChart__arrowDown">
      </div>
    </div>
    <div id="chart">
      <apexchart type="line" height="350"  :options="chartOptions" :series="series"></apexchart>
    </div>
    <div class="lineChart__days">
      <div v-for="item in options" :key="item.days">
        <p class="lineChart__option">{{ item.option }}</p>
        <p class="lineChart__taskDays">{{ item.days }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import arrowDown from '@/assets/svgs/arrowDown.svg'

export default {
  name: "LineChart",
  setup() {
    const series = [
      {
        name: "Average Cycle time",
        data: [14, 5, 14, 18],

      },
      {
        name: "Agreed TAT",
        data: [8, 9, 19, 10],
      }
    ]
    const chartOptions = {
      chart: {
        height: 350,
        type: 'line',
        width: '300px',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0
        },
        sparkline: {
          enabled: false,
        },
        toolbar: {
          show: true
        }
      },
      grid: {
        borderColor: '#e7e7e7',
        padding: {
          top: 0,
          right: -100,
          bottom: 0,
          left: -100
        },
      },
      colors: ['#43BCCD', '#6D32A5'],
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 10,
        colors: '#fff',
        strokeColors: ['#43BCCD', '#6D32A5'],
        strokeWidth: 4,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 5,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        showNullDataPoints: true,
      },
      xaxis: {
        categories: ['TASKS APPROVING', 'knowledge transfer', 'production parallel', 'live execution'],
        tickAmount: undefined,
        tickPlacement: 'between',
        min: undefined,
        max: undefined,
        range: undefined,
        floating: false,
        decimalsInFloat: undefined,
        overwriteCategories: undefined,
        position: 'bottom',

      },
      yaxis: {
        min: 0,
        max: 30,
        tickAmount: 3
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        floating: false,
        offsetY: -40,
        offsetX: 100
      }
    }

    //option items

    const options = [
      {
        option: 'TASKS APPROVING',
        days: '12 days (avg.)'
      },
      {
        option: 'knowledge',
        days: '4 days (avg.)'
      },
      {
        option: 'production',
        days: '13 days (avg.)'
      },
      {
        option: 'live',
        days: '8 days (avg.)'
      },
      {
        option: 'Total',
        days: '37 days (avg.)'
      }
    ]

    return {
      series,
      chartOptions,
      arrowDown,
      options
    }
  }
}
</script>

<style scoped lang="scss" src="../styles/_lineCharts.scss"></style>