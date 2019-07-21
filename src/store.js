import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadedMeetups: [{
                imageUrl: 'https://media.timeout.com/images/104687769/750/422/image.jpg',
                id: 'sdafea',
                title: 'Meet up in nyc',
                date: '2019-04-12',
                location: 'New York',
                description: ' NYC heyyyyy'


            },

            {
                imageUrl: 'https://i0.wp.com/urbanmatter.com/chicago/wp-content/uploads/2017/10/shutterstock_530918146.jpg?w=1000&ssl=1',
                id: 'fsafaf',
                title: 'Meet up in chicago',
                date: '2019-04-24',
                location: 'Chicago',
                description: 'Chicago cago cago'
            }

        ],
        user: {
            id: 'ahfoiajf',
            registeredMeetups: ['hafisuhiufsahiuhsa']

        }


    },
    mutations: {
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload)
        }
    },
    actions: {
        createMeetup({ commit }, payload) {
            const meetup = {
                    title: payload.title,
                    location: payload.location,
                    imageUrl: payload.imageUrl,
                    description: payload.description,
                    date: payload.date,
                    id: 'lololollllo'
                }
                // -> firebase/store
            commit('createMeetup', meetup)
        }
    },
    getters: {
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups(state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        }
    }
})