<template>
  <div class="sectionInfo">
    <p class="sectionInfo__sectionName">{{ name }}
      <img :src="circleInfo" alt="" class="sectionInfo__sectionInfoImg" v-if="withImg">
    </p>
    <p class="sectionInfo__count">{{ count }}</p>
  </div>
</template>

<script>
import circleInfo from "../assets/svgs/circle-info.svg"

export default {
  props: ['withImg', 'name', 'count'],
  setup() {
    return {
      circleInfo
    }
  }
}
</script>

<style scoped lang="scss" src="../styles/_infoSection.scss"></style>
