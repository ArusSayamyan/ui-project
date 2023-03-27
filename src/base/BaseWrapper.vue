<template>
  <div class="wrapper">
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  name: "BaseWrapper"
}
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 1652px;
  width: 100%;
  margin: 0 auto 30px;
  border-radius: 30px;
  box-shadow: 0 3px 26px #00000008;
  background-color: #ffff;
  padding: 30px;
  box-sizing: border-box;
}
</style>