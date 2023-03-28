<template>
  <button class="baseBtn" :class="{ baseBtn__colored: colored }">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: "BaseBtn",
  props: ['btnText', 'colored']
}
</script>

<style scoped lang="scss">
.baseBtn {
  background-color: #2B0F4D;
  border-radius: 10px;
  color: #fff;
  text-transform: uppercase;
  border: none;
  box-shadow: 0 3px 16px #0000001A;
  padding: 20px;
  max-width: 441px;
  width: 100%;
  font-size: 15px;

  &__colored {
    background-color: #F53361;
  }
}
</style>