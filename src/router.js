import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MeetUps from './views/MeetUps.vue'
import Profile from './views/Profile.vue'
import CreateMeetUp from './views/CreateMeetUp.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import Meetup from './views/Meetup.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/meetups',
            name: 'meetups',
            component: MeetUps
        },
        {
            path: '/meetups/new',
            name: 'createmeetup',
            component: CreateMeetUp
        },
        {
            path: '/meetups/:id',
            name: 'Meetup',
            props: true,
            component: Meetup
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp
        },
        {
            path: '/signin',
            name: 'sigin',
            component: SignIn
        },


    ],

})