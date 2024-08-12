<template>
  <div class="bottom-section">
    <div v-for="(el, i) in faq" :key="i" class="bottom-section__item">
      <div class="bottom-section__item__title">
        {{ el.title }}
      </div>
      <div class="bottom-section__item__content">
        {{ el.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomSection',
  data() {
    return {
      faq: [
        {
          title: 'How can I win?',
          content:
            'Thanks to your membership, you also participate in our contest to win the iPhone15. We sellect a winner among every 600 participants. The next winner will be selected on 06.10.2023, and will be notified directly by e-mail. If the reward is out of stock, the winner will receive a similar product of equal or greater value instead.'
        },
        {
          title: 'No hidden fees?',
          content:
            'We ensure that our members are provided with a detailed history of transactions so that they know exactly what they are paying for. Credit card information is only required to facilitate future purchases. There will be no charges on your credit card statement if you do not upgrade to PREMIUM membership and do not make a purchase.'
        },
        {
          title: 'Why do we need your billing information?',
          content:
            "By joining this service, you will receive a 5-day trial of our partner's program. If you continue with a subscription beyond the 5-day trial period, you will be charged an amount on your credit card which varies depending on the choice of the tariff. When your contribution is deducted from your credit card or other payment method, you will have access to these services which are reserved exclusively for members of our partner's website."
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-section {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: $grey-1;
  padding: 24px 33px;
  gap: 100px;
  margin-top: 60px;
  color: $green-2;

  &__item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 500px;
    &__title {
      font-size: 17px;
      font-weight: 600;
    }
    &__content {
      font-size: 13px;
    }
  }
}
</style>
