import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViCommon from "vi-common"
import ViFormBuilder from "vi-form-builder";

const app = createApp(App)

app.use(router)
    .use(store)
    .use(ViCommon, {
        toastify: {
            autoClose: 2000,
            theme: 'colored',
            hideProgressBar: true
        }
    })
    .use(ViFormBuilder)

app.mount('#app')
