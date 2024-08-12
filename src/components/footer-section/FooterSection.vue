<template>
  <div class="footer">
    <div class="footer__header">We accept the following credit cards:</div>
    <div class="footer__images">
      <img :src="image" alt="cards" class="footer__images__item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      image: 'src/assets/footer-images/cards.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 21px;
  margin-bottom: 21px;
  &__header {
    font-size: 16px;
    color: $green-3;
  }
}
</style>
