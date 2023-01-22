import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import { createGtm } from '@gtm-support/vue-gtm'
import VueGtag from 'vue-gtag'

const app = createApp(App)

app.use(router)

app.use(VueGtag, {
    config: {
        id: 'G-69KRF956XB'
    }
})

app.use(
    createGtm({
        id: 'GTM-M8TX7NH',
    })
)

app.mount('#app')
