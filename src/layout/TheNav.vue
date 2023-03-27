<template>
  <div class="nav">
    <div class="nav__userBlock">
      <div class="nav__info">
        <img :src="infoImg" alt="" class="nav__infoImg">
        <div class="nav__infoCountWrapper">
          <span class="nav__infoCount">1</span>
        </div>
      </div>
      <div class="nav__userImg"></div>
    </div>
  </div>
</template>

<script>
import infoImg from "@/assets/svgs/info.svg"
export default {
  name: "TheNav",
  setup() {
    return {
      infoImg
    }
  }
}
</script>

<style scoped lang="scss">

@import "../utils/_vars.scss";

.nav {
  max-width: 1652px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding: 17px 0 0;

  &__userBlock {
    max-width: 130px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__info {
    position: relative;
  }

  &__infoImg {
    width: 28px;
    height: auto;
  }

  &__infoCountWrapper {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: $color-radical-red;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 15px;
  }

  &__infoCount {
    font-size: 8px;
    color: $color-white;
  }

  &__userImg {
    width: 70px;
    height: 70px;
    background-color: gray;
    border-radius: 50%;
  }
}
</style>