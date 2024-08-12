<script>
import PaymentButton from './components/details-form/PaymentButton.vue'
import InputField from './components/details-form/InputField.vue'
import DetailsForm from './components/details-form/DetailsForm.vue'
import ImageCarousel from './components/image-carousel/ImageCarousel.vue'
import TopSection from './components/top-section/TopSection.vue'
import MiddleSection from './components/middle-section/MiddleSection.vue'
import BottomSection from './components/bottom-section/BottomSection.vue'
import FooterSection from './components/footer-section/FooterSection.vue'

export default {
  components: {
    InputField,
    PaymentButton,
    DetailsForm,
    ImageCarousel,
    TopSection,
    MiddleSection,
    BottomSection,
    FooterSection
  }
}
</script>

<template>
  <div class="app">
    <div class="main__content">
      <input-field v-if="false" placeholder="First name" />
      <payment-button v-if="false" />
      <details-form v-if="false" />
      <image-carousel v-if="false" />
      <top-section />
      <middle-section />
    </div>
    <bottom-section />
    <footer-section />
  </div>
</template>

<style lang="scss" scoped>
@import '../node_modules/@fontsource/roboto/index.css';

.app {
  font-family: 'Roboto', sans-serif;
}

.main__content {
  margin: 0 20px;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
