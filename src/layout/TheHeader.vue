<template>
  <div class="header">
    <p class="header__title">dashboard</p>
    <div class="header__section">
      <div class="header__titleBlock">
        <h1 class="header__sectionTitle">Insights</h1>
      </div>
      <div class="header__infoSections">
        <info-section
            name="total transitions"
            :with-img=false
            :count=15
        ></info-section>
        <info-section
            name="INITIATED"
            :with-img=true
            :count=2
        ></info-section>
        <info-section
            name="IN PROGRESS"
            :with-img=true
            :count=5
        ></info-section>
        <info-section
            name="completed"
            :with-img=true
            :count=2
        ></info-section>
      </div>
    </div>
  </div>
</template>

<script>

import infoSection from "@/components/InfoSection.vue";

export default {
  name: "TheHeader",
  components: {
    infoSection
  },
  setup() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
@import "../utils/_vars.scss";

.header {
  max-width: 1652px;
  width: 100%;
  margin: 0 auto 30px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid  #A3A6B9;

  &__title {
    color: $color-royal-purple;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 8px;
    margin-top: 0;
  }

  &__section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 35px;
  }

  &__sectionTitle {
    font: normal normal bold 60px/76px sans-serif;
    color: #05081D;
    opacity: 1;
    margin: 0;
  }

  &__infoSections {
    display: flex;
    max-width: 830px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
}

</style>