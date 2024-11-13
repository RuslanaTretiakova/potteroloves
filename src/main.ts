import App from './App.vue'

import { createApp } from 'vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(createPinia())

app.mount('#app')
