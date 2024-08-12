const detailsForm = {
  firstName: '',
  lastName: '',
  street: '',
  postalCode: '',
  city: '',
  phoneNumber: '',
  email: ''
}

const state = () => ({
  detailsForm
})

const getters = {
  detailsForm: (state) => state.detailsForm
}

const actions = {
  setFirstName({ commit }, firstName) {
    commit('SET_FIRST_NAME', firstName)
  },
  setLastName({ commit }, lastName) {
    commit('SET_LAST_NAME', lastName)
  },
  setStreet({ commit }, street) {
    commit('SET_STREET', street)
  },
  setPostalCode({ commit }, postalCode) {
    commit('SET_POSTAL_CODE', postalCode)
  },
  setCity({ commit }, city) {
    commit('SET_CITY', city)
  },
  setPhoneNumber({ commit }, phoneNumber) {
    commit('SET_PHONE_NUMBER', phoneNumber)
  },
  setEmail({ commit }, email) {
    commit('SET_EMAIL', email)
  }
}

const mutations = {
  SET_FIRST_NAME(state, firstName) {
    state.detailsForm.firstName = firstName
  },
  SET_LAST_NAME(state, lastName) {
    state.detailsForm.lastName = lastName
  },
  SET_STREET(state, street) {
    state.detailsForm.street = street
  },
  SET_POSTAL_CODE(state, postalCode) {
    state.detailsForm.postalCode = postalCode
  },
  SET_CITY(state, city) {
    state.detailsForm.city = city
  },
  SET_PHONE_NUMBER(state, phoneNumber) {
    state.detailsForm.phoneNumber = phoneNumber
  },
  SET_EMAIL(state, email) {
    state.detailsForm.email = email
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
