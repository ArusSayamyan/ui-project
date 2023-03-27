<template>
  <div class="sidebar">
    <div class="sidebar__logoWrapper">
      <img src="@/assets/svgs/logo.svg" alt="">
    </div>
    <div class="sidebar__pageIcons">
      <img src="@/assets/svgs/home.svg" alt="" class="sidebar__pageIcon">
      <img src="@/assets/svgs/update.svg" alt="" class="sidebar__pageIcon">
      <img src="@/assets/svgs/messages.svg" alt="" class="sidebar__pageIcon">
    </div>
    <div class="sidebar__add">
      <img src="@/assets/svgs/add.svg" alt="" class="sidebar__addIcon">
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSideBar"
}
</script>

<style scoped lang="scss">
.sidebar {
  width: 96px;
  height: 100vh;
  background-color: #000;
  padding: 32px 21px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;

  &__pageIcon {
    width: 22px;
    padding-top: 60px;
  }

  &__pageIcons {
    display: flex;
    justify-content: space-between;
    max-height: 350px;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
}
</style>