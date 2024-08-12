<template>
  <div class="wrapper">
    <img src="@/assets/payment-logos/1.svg" height="55" alt="logo1" class="logo" />
    <img src="@/assets/payment-logos/2.svg" height="55" alt="logo2" class="logo" />
    <img src="@/assets/payment-logos/3.svg" height="55" alt="logo3" class="logo" />
  </div>
</template>

<script>
export default {
  name: 'LogosWrapper'
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 22px;
}
</style>
