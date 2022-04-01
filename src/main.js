import 'normalize.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import constants from './constants'

import Vant from 'vant'
import 'vant/lib/index.css'

// eslint-disable-next-line
import styles from './assets/styles/styles.scss';

const app = createApp(App)
  .use(store)
  .use(router)
  .use(Vant)

app.config.globalProperties.$CONSTANTS = constants

app.mount('#app')
