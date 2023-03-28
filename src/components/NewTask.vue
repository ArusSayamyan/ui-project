<template>
  <base-wrapper>
    <div class="newTaskBlock">
      <div class="newTaskBlock__content">
        <img :src="flag" alt="" class="newTaskBlock__image">
        <div class="newTaskBlock__descBlock">
          <h1 class="newTaskBlock__title">Transition ready to be concluded</h1>
          <p class="newTaskBlock__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut reiciendis vel voluptate. Accusamus asperiores iste iure laborum
          </p>
        </div>
      </div>
      <div class="newTaskBlock__btns">
        <base-btn btnText="add other tasks"></base-btn>
        <base-btn btnText="conclude transition" :colored=true></base-btn>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
import flag from '@/assets/svgs/flag.svg'

export default {
  name: "NewTask",

  setup() {
    return {
      flag
    }
  }
}
</script>

<style scoped lang="scss" src="../styles/_newTask.scss"></style>