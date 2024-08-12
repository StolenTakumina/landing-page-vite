<template>
  <div class="section">
    <div class="section__left">
      <image-carousel />
    </div>
    <div class="section__right">
      <div class="section__right__header">
        <div class="section__right__header__title">
          {{ title }}
        </div>
        <div class="section__right__header__subtitle">
          {{ subtitle }}
        </div>
      </div>
      <details-form />
    </div>
  </div>
</template>

<script>
import DetailsForm from '../details-form/DetailsForm.vue'
import ImageCarousel from '../image-carousel/ImageCarousel.vue'
export default {
  name: 'TopSection',
  components: {
    ImageCarousel,
    DetailsForm
  },
  data() {
    return {
      title: 'Chance to win a StockX Mystery Box today!',
      subtitle: 'Unleash the Excitement of Mystery Electronics'
    }
  }
}
</script>

<style lang="scss">
.section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 100px;

  &__right {
    display: flex;
    flex-direction: column;
    gap: 28px;
    width: 56%;

    &__header {
      display: flex;
      flex-direction: column;
      gap: 11px;

      &__title {
        font-size: $title-size;
        max-width: 800px;
        font-weight: 900;
        color: $green-3;
      }

      &__subtitle {
        font-size: $subtitle-size;
        font-weight: 400;
        color: $green-3;
      }
    }
  }
  &__left {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
