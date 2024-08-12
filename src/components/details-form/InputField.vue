<template>
  <div class="input">
    <div
      :class="{
        input__container: true,
        '--altered': inputValue.length > 0
      }"
    >
      <input
        :placeholder="placeholder"
        class="input__container__input"
        type="text"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    placeholder: {
      type: String,
      default: 'Placeholder'
    }
  },
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    onInput(event) {
      this.inputValue = event.target.value
      this.$emit('input', this.inputValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &__container {
    display: flex;
    align-items: center;
    border: 2px solid $grey-3;
    border-radius: 12px;
    padding: 16px 22px;
    width: 100%;

    &__input {
      font-size: $content-size;
      border: none;
      outline: none;
      padding: 0;
      color: $green-2;
      width: 100%;
      height: 100%;
    }

    &.--altered {
      border: 2px solid $green-2;
    }

    &:focus-within {
      border: 2px solid $green-2;
    }
  }
}
::placeholder {
  color: $grey-4;
  opacity: 1;
}
</style>
