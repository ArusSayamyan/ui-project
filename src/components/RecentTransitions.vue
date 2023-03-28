<template>
  <div class="accordion">
    <div class="accordion__header">
      <p class="accordion__title">recent transitions</p>
      <div class="accordion__switcher">
        <label for="switch" class="accordion__switcherName">Hide completed</label>
          <InputSwitch v-model="checked" id="switch"/>
      </div>
    </div>
    <AccordionItem/>
  </div>
</template>

<script>
import {ref} from 'vue';
import AccordionItem from "@/components/AccordionItem";

export default {

  name: "ResentTransitions",
  components: {
    AccordionItem
  },
  setup() {
    const value = ref('')
    const checked = ref(true);
    return {
      value,
      checked,
    }
  }
}
</script>

<style scoped lang="scss" src="../styles/_recentTransitions.scss"></style>