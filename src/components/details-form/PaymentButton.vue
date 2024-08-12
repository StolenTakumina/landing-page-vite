<template>
  <div class="button">
    <div class="button__container" @click="setPayment">
      <div class="button__label">
        {{ label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentButton',
  data() {
    return {
      label: 'PROCEED TO PAYMENT'
    }
  },
  methods: {
    setPayment() {
      this.$emit('payment')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &__container {
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $green-1;
    border-radius: 12px;
    padding: 16px 22px;
    cursor: pointer;
    font-size: $content-size;
    &:hover {
      background-color: $green-2;
    }
  }
}
</style>
