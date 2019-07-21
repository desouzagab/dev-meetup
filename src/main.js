import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import DateFilter from './components/datefilter'

Vue.config.productionTip = false

Vue.filter('date', DateFilter)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')