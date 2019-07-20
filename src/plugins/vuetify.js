import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify, {
    iconfont: 'md',
    lang: {
        locales: { pt },
        current: 'pt'
    },
    theme: {
        primary: '#4caf50',
        secondary: '#8bc34a',
        accent: '#cddc39',
        error: '#ffc107',
        warning: '#ff5722',
        info: '#607d8b',
        success: '#009688'
    }


})