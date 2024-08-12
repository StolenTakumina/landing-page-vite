<template>
  <div class="section" :class="{ '--even': id % 2 === 0 }">
    <div class="section__image">
      <img :src="image" width="810" height="810" alt="section-image" class="section__image__item" />
    </div>
    <div class="section__content">
      <div class="section__content__title">
        <div class="section__content__title__header">
          <span
            v-for="(el, i) in parsedTitle"
            :key="i"
            :class="{
              section__content__title__header__item: true,
              '--name': el === 'StockX'
            }"
            >{{ el + ' ' }}
          </span>
        </div>
      </div>

      <div class="section__content__items">
        <div v-for="(item, i) in content" :key="i" class="section__content__items__item">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleSection',
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: 'Title'
    },
    content: {
      type: Array,
      default: () => []
    },
    image: {
      type: String,
      default: ''
    }
  },
  computed: {
    parsedTitle() {
      return this.title.split(' ')
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: row;
  color: $green-3;
  align-items: center;
  justify-content: space-between;
  &__image {
    display: flex;
    justify-content: center;
    align-items: center;

    &__item {
      border-radius: 30px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 22px;

    &__title {
      width: 100%;

      &__header {
        width: 800px;
        font-weight: 900;
        font-size: $section-title-size;
        &__item {
          &.--name {
            color: $green-1;
          }
        }
      }
    }

    &__items {
      display: flex;
      flex-direction: column;
      gap: 11px;
      width: 900px;

      &__item {
        font-size: 24px;
        font-weight: 400;
        line-height: 36px;
      }
    }
  }

  &.--even {
    flex-direction: row-reverse;
  }
}
</style>
