import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import DateFilter from './components/datefilter'
import * as firebase from 'firebase'
import Alert from './components/Alert'

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('alert', Alert)

const config = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET
}

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        firebase.initializeApp(config)
    }
}).$mount('#app')