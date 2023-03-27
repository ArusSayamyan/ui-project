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

<style scoped lang="scss">
.accordionItem {
  max-width: 1652px;
  width: 100%;
  margin: 0 auto 30px;
  border-radius: 30px;
  background-color: #ffff;
  box-sizing: border-box;

  &__subHeader, &__contentBox {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 30px;
  }

  &__block, &__messages {
    display: flex;
    align-items: center;
  }

  &__block {
    max-width: 220px;
    width: 100%;
  }

  &__headerTitle {
    color: #05081D;
    font-weight: 600;
    font-size: 26px;
  }

  &__img {
    width: 21px;
  }

  &__role {
    max-width: 100px;
    width: 100%;
  }

  &__infoName {
    font-size: 12px;
    color: #A3A6B9;
    text-transform: uppercase;
    margin-bottom: 11px !important;
  }

  &__infoDesc {
    color: #05081D;
    font-size: 15px;
    font-weight: 600;
  }

  &__infoIcon {
    margin-left: 15px;
  }

  &__infoLink {
    max-width: 195px;
    width: 100%;
    padding: 10px 25px;
    text-decoration: none;
    border-radius: 25px;
    color: #ffff;
    text-transform: uppercase;
    font-size: 15px;

    &--isPink {
      background-color: #F53361;
    }

    &--isPurple {
      background-color: #6D32A5;
    }

    &--isBlue {
      background-color: #43BCCD;
    }
  }

  &__content {
    border-top: 1px solid #A3A6B9;
    padding-bottom: 25px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  &__rows {
    max-width: 1355px;
    width: 100%;
  }

  &__contentBox {
    padding: 25px 0 0;
    max-width: 1225px;
    width: 100%;
  }

  &__percentBlock {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__percentage {
    max-width: 1370px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
    flex-direction: column;
  }

  &__percentName {
    font-size: 12px;
    color: #F53361;
    text-transform: uppercase;
    font-weight: 700;
  }

  &__percentDemo {
    width: 100%;
    height: 10px;
    border-radius: 25px;
    background-color: #F53361;
    max-width: 1180px;
  }

  &__percent {
    text-align: end;
    color: #F53361;
  }

  &__settings {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 25px;
  }
}

.accordion-custom {
  margin-bottom: 15px;
}

.accordion-custom i span {
  vertical-align: middle;
}

.accordion-custom span {
  margin: 0 0.5rem 0 0;
}

.p-accordion p {
  line-height: 1.5;
  margin: 0;
}

.p-toggleable-content {
  border-top: 1px solid #A3A6B9 !important;
  padding-bottom: 25px !important;
}

.card .p-accordion {
  background-color: #fff;
  border-radius: 30px;
  align-items: center;
}

</style>