export const state = () => ({
  user: {},
  messages: []
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  clearData(state) {
    state.user = {}
  },
  newMessage(state, message) {
    state.messages.push(message)
  }
}

export const actions = {
  SOCKET_newMessage({commit}, data) {
    commit('newMessage', data)
  }
}
