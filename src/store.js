import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadedMeetups: [{
                imageUrl: 'https://media.timeout.com/images/104687769/750/422/image.jpg',
                id: 'sdafea',
                title: 'Meet up in nyc',
                date: new Date(),
                location: 'New York',
                description: ' NYC heyyyyy'


            },

            {
                imageUrl: 'https://i0.wp.com/urbanmatter.com/chicago/wp-content/uploads/2017/10/shutterstock_530918146.jpg?w=1000&ssl=1',
                id: 'fsafaf',
                title: 'Meet up in chicago',
                date: new Date(),
                location: 'Chicago',
                description: 'Chicago cago cago'
            }

        ],
        user: null,
        loading: false,
        error: null
    },
    mutations: {
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload)
        },
        setUser(state, payload) {
            state.user = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        clearError(state) {
            state.error = null
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
                    id: 'kfdlsfjslakl12'
                }
                // Reach out to firebase and store it
            commit('createMeetup', meetup)
        },
        signUserUp({ commit }, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser = {
                            id: user.uid,
                            registeredMeetups: []
                        }
                        commit('setUser', newUser)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error)
                    }
                )
        },
        signUserIn({ commit }, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser = {
                            id: user.uid,
                            registeredMeetups: []
                        }
                        commit('setUser', newUser)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error)
                    }
                )
        },
        clearError({ commit }) {
            commit('clearError')
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
        },
        user(state) {
            return state.user
        },
        loading(state) {
            return state.loading
        },
        error(state) {
            return state.error
        }
    }
})