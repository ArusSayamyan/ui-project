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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../utils/_vars.scss";

.sectionInfo {
  &__sectionName {
    color: $color-santas-gray;
    text-transform: uppercase;
    font-size: 15px;
    margin-bottom: 5px;
    font-weight: 600;
  }

  &__count {
    font-size: 30px;
    margin: 0;
    font-weight: 600;
  }
}

</style>
