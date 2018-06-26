/**
 * Store for global methods and props
 */

const state = {
  title: ''
}

const mutations = {
  setTitle(state, title) {
    state.title = title
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
