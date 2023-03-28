<template>
  <div class="card">
    <Accordion class="accordion-custom accordionItem">
      <AccordionTab v-for="accordion in accordionInfo" :key="accordion.id">
        <template #header>
          <div class="accordionItem__subHeader">
            <div class="accordionItem__block">
              <span class="accordionItem__headerTitle">{{ accordion.accordionName }}</span>
              <img :src="flag" alt="" class="accordionItem__img" v-if="accordion.isImportant">
            </div>
            <div class="accordionItem__role">
              <p class="accordionItem__infoName">MY ROLE</p>
              <p class="accordionItem__infoDesc">{{ accordion.role }}</p>
            </div>
            <div class="accordionItem__info">
              <p class="accordionItem__infoName">status</p>
              <a class="accordionItem__infoLink" href="#" :class="'accordionItem__infoLink--' + accordion.className">{{ accordion.status }}d</a>
            </div>
            <div class="accordionItem__info">
              <p class="accordionItem__infoName">days to go</p>
              <p class="accordionItem__infoDesc">26</p>
            </div>
            <div class="accordionItem__messages">
              <p class="accordionItem__messageCount">15</p>
              <img :src="messageIcon" alt="messageIcon" class="accordionItem__infoIcon">
            </div>
          </div>
        </template>
        <div class="accordionItem__content">
          <div class="accordionItem__rows">
            <div class="accordionItem__contentBox">
              <div class="accordionItem__info">
                <p class="accordionItem__infoName">CREATOR</p>
                <p class="accordionItem__infoDesc">John Adams</p>
              </div>
              <div class="accordionItem__info">
                <p class="accordionItem__infoName">COLLABORATOR(s)</p>
                <p class="accordionItem__infoDesc">Nishant Mehra | Lu Shih</p>
              </div>
              <div class="accordionItem__info">
                <p class="accordionItem__infoName">transitor</p>
                <p class="accordionItem__infoDesc">Sammy Jo</p>
              </div>
              <div class="accordionItem__info">
                <p class="accordionItem__infoName">transitee(s)</p>
                <p class="accordionItem__infoDesc">Vladimir Nikolsky</p>
              </div>
            </div>
            <div class="accordionItem__percentage">
              <p class="accordionItem__percent">100%</p>
              <div class="accordionItem__percentBlock">
                <p class="accordionItem__percentName">completion percentage</p>
                <div class="accordionItem__percentDemo"></div>
              </div>
            </div>
            <div class="accordionItem__contentBox">
              <div class="accordionItem__info">
                <p class="accordionItem__infoName">tasks</p>
                <p class="accordionItem__infoDesc">26</p>
              </div>
              <div class="accordionItem__info">
                <p class="accordionItem__infoName">knowledge transefer</p>
                <p class="accordionItem__infoDesc">12</p>
              </div>
              <div class="accordionItem__info">
                <p class="accordionItem__infoName">production parallel</p>
                <p class="accordionItem__infoDesc">6</p>
              </div>
              <div class="accordionItem__info">
                <p class="accordionItem__infoName">LIVE EXECUTION</p>
                <p class="accordionItem__infoDesc">N/A</p>
              </div>
            </div>
          </div>
          <div class="accordionItem__settings">
            <div class="accordionItem__imgWrapper">
              <img src="@/assets/svgs/download.svg" alt="" class="accordionItem__downloadIcon">
            </div>
            <div class="accordionItem__imgWrapper">
              <img src="@/assets/svgs/view.svg" alt="" class="accordionItem__downloadIcon">
            </div>
            <div class="accordionItem__imgWrapper">
              <img src="@/assets/svgs/selected.svg" alt="" class="accordionItem__downloadIcon">
            </div>
          </div>
        </div>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import flag from '@/assets/svgs/flag.svg';
import messageIcon from '@/assets/svgs/messageIcon.svg'

export default {
  name: "AccordionItem",
  components: {
    Accordion,
    AccordionTab,
  },
  setup() {

    const accordionInfo = [
      {
        id: 1,
        accordionName: 'UI/UX Designer',
        role: 'Creator',
        status: 'Read to be concluded',
        isImportant: true,
        className: 'isPink'
      },
      {
        id: 2,
        accordionName: 'Tech Lead',
        role: 'Collaborator',
        status: 'Production Parallel',
        isImportant: false,
        className: 'isPurple'
      },
      {
        id: 3,
        accordionName: 'HR Manager',
        role: 'Transitor',
        status: 'Knowledge Transfer',
        isImportant: false,
        className: 'isBlue'
      }
    ]
    return {
      flag,
      messageIcon,
      accordionInfo
    }
  }
}
</script>

<style src="../styles/_accordIonItem.scss" lang="scss" scoped></style>