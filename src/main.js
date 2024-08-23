import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/main.css';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// PrimeVue
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const vuetify = createVuetify({
    components,
    directives,
  })
  

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount('#app')
