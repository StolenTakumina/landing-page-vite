<template>
  <div class="middle-section">
    <div class="middle-section__header">
      <div class="middle-section__header__title">
        {{ title }}
      </div>
      <div class="middle-section__header__subtitle">
        {{ subtitle }}
      </div>
    </div>
    <div v-for="section in sections" :key="section.id" class="middle-section__section">
      <single-section
        :id="section.id"
        :title="section.title"
        :content="section.content"
        :image="section.image"
      />
    </div>
  </div>
</template>

<script>
import SingleSection from './SingleSection.vue'
export default {
  name: 'MiddleSection',
  components: {
    SingleSection
  },
  data() {
    return {
      title: 'Top Tech Mystery Box at Unbeatable Prices',
      subtitle: 'Fast shipping | Easy returns | Special discounts for students',
      sections: [
        {
          id: 1,
          title: 'Curious about the StockX Mystery Box?',
          content: [
            'Experience the thrill of unboxing cutting-edge gadgets with Stockx Mystery Boxes. Each box is a treasure trove of high-quality electronics, handpicked to elevate your tech game.',
            'Expect the unexpected! Our boxes are packed with the latest gadgets, from smartphones to gaming consoles, ensuring you get the best tech surprises every time.'
          ],
          image: 'src/assets/section-images/image1.png'
        },
        {
          id: 2,
          title: 'Why is everyone buzzing about these boxes?',
          content: [
            'StockX Mystery Boxes are not just about products; they’re about the experience. Imagine the excitement of unveiling top-tier electronics at a fraction of the cost.',
            'Our boxes include a variety of premium tech items, making it a must-have for every tech enthusiast. Join the buzz and see why everyone is raving about the unbeatable value and surprise factor of Stockx Mystery Boxes!'
          ],
          image: 'src/assets/section-images/image2.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.middle-section {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 60px;

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &__title {
      font-size: $section-title-size;
      text-align: center;
      max-width: 650px;
      font-weight: 900;
      color: $green-2;
    }
    &__subtitle {
      font-size: $section-subtitle-size;
      color: $green-1;
    }
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
