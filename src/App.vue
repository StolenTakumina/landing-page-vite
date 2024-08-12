<script>
import TopSection from './components/top-section/TopSection.vue'
import MiddleSection from './components/middle-section/MiddleSection.vue'
import BottomSection from './components/bottom-section/BottomSection.vue'
import FooterSection from './components/footer-section/FooterSection.vue'

export default {
  components: {
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
      <top-section />
      <middle-section />
    </div>
    <bottom-section />
    <footer-section />
  </div>
</template>

<style lang="scss" scoped></style>
