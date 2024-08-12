<template>
  <div class="wraper">
    <img src="@/assets/1.svg" height="55" alt="logo1" class="logo" />
    <img src="@/assets/2.svg" height="55" alt="logo2" class="logo" />
    <img src="@/assets/3.svg" height="55" alt="logo3" class="logo" />
  </div>
</template>

<script>
export default {
  name: 'LogosWraper'
}
</script>

<style lang="scss" scoped>
.wraper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 22px;
}
</style>
