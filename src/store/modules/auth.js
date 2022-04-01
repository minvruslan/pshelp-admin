import AuthApi from '@api/auth.js'

const state = () => ({
  session: {},
  loading: false
})

const getters = {
  getSession: (state) => state.session,
  getLoading: (state) => state.loading
}

const actions = {
  async auth ({ commit, dispatch }, params) {
    try {
      commit('setLoading', true)
      const result = await AuthApi.auth(params.username, params.password)

      if (result?.rc === 0) {
        commit('setSession', result.data.session)
        return true
      } else {
        throw Error('Auth failed.')
      }
    } catch (e) {
      commit('setSession', {})
      console.error(e)
    } finally {
      commit('setLoading', false)
    }

    return false
  }
}

const mutations = {
  setSession: (state, session) => {
    state.session = session
  },
  setLoading: (state, loading) => {
    state.loading = loading
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
