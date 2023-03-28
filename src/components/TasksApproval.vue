<template>
  <div class="tasksApproval">
    <div class="tasksApproval__wrapper">
      <div class="tasksApproval__header">
        <p class="tasksApproval__title">Tasks approval rate</p>
        <div class="tasksApproval__select">
          <span class="tasksApproval__selectName">All phases</span>
          <img :src="arrowDown" alt="" class="taskStatistics__arrowDown">
        </div>
      </div>
      <div id="chart">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
import arrowDown from '@/assets/svgs/arrowDown.svg'

export default {
  name: "TasksApproval",
  setup() {
    const series =  [{
      data: [71, 29]
    }]
    const chartOptions = {
      chart: {
        height: 350,
        type: 'bar',
        sparkline: {
          enabled: true
        }
      },
      grid: {
        padding: {
          top: 0,
          right: 50,
          bottom: 0,
          left: 250
        },
      },
      colors: ['#43BCCD', '#6D32A5'],
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -28,
        style: {
          fontSize: '13px',
          colors: ["#304758"]
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '70%',
          distributed: true,
          borderRadius: 15,
          dataLabels: {
            position: 'top',
          },
        }
      },
      legend: {
        show: true,
        position: 'left',
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: '#fff',
          radius: 12,
          offsetX: 0,
          offsetY: 0
        }
      },
      xaxis: {
        categories: [
          ['Reviewed tasks (26)'],
          ['Not reviewed tasks (18)'],
        ],
        labels: {
          show: false,
          position: 'left',
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      }

    }

    return {
      arrowDown,
      series,
      chartOptions
    }
  }
}
</script>

<style scoped lang="scss" src="../styles/_tasksApproval.scss"></style>