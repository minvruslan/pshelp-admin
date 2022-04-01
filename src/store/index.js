/* eslint-disable camelcase */

import { createStore } from 'vuex'
import auth from './modules/auth'

export default createStore({
  strict: true,
  modules: {
    auth
  }
})
