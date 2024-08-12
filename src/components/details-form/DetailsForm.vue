<template>
  <div class="form">
    <div class="form__header">
      {{ header }}
    </div>
    <div class="form__body">
      <div class="form__body__row">
        <input-field
          :placeholder="fields[0].placeholder"
          @input="onInput(fields[0].name, $event)"
        />
        <input-field
          :placeholder="fields[1].placeholder"
          @input="onInput(fields[1].name, $event)"
        />
      </div>
      <input-field :placeholder="fields[2].placeholder" @input="onInput(fields[2].name, $event)" />
      <div class="form__body__row">
        <input-field
          :placeholder="fields[3].placeholder"
          @input="onInput(fields[3].name, $event)"
        />
        <input-field
          :placeholder="fields[4].placeholder"
          @input="onInput(fields[4].name, $event)"
        />
      </div>
      <input-field :placeholder="fields[5].placeholder" @input="onInput(fields[5].name, $event)" />

      <input-field :placeholder="fields[6].placeholder" @input="onInput(fields[6].name, $event)" />
    </div>
    <payment-button @payment="onPaymentButtonClick" />
    <logos-wrapper />
  </div>
</template>

<script>
import PaymentButton from './PaymentButton.vue'
import InputField from './InputField.vue'
import LogosWrapper from './LogosWrapper.vue'
export default {
  name: 'DetailsForm',
  components: {
    PaymentButton,
    InputField,
    LogosWrapper
  },
  data() {
    return {
      header: 'Enter details',
      fields: [
        { name: 'setFirstName', placeholder: 'First name' },
        { name: 'setLastName', placeholder: 'Last name' },
        { name: 'setStreet', placeholder: 'Street' },
        { name: 'setPostalCode', placeholder: 'Postal code' },
        { name: 'setCity', placeholder: 'City' },
        { name: 'setPhoneNumber', placeholder: 'Phone number' },
        { name: 'setEmail', placeholder: 'Email' }
      ]
    }
  },
  methods: {
    onInput(field, value) {
      if (typeof value == 'string') {
        this.$store.dispatch(field, value)
      }
    },
    onPaymentButtonClick() {
      const form = this.$store.getters['detailsForm']
      console.log('Payment button clicked', form)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 2px solid $grey-2;
  border-radius: 10px;

  &__header {
    font-size: $form-size;
    font-weight: bold;
    color: $green-2;
  }

  &__body {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 22px;

    &__row {
      display: flex;
      flex-direction: row;
      gap: 22px;
    }
  }
}
</style>
