import {register, self} from "@/modules/auth/api.js";

const defaultState = () => ({
    self: null,
    accessToken: null
})

export default {
    namespaced: true,

    actions: {
        self({commit}) {
            return self()
                .then(data => {
                    commit('setSelf', data)
                    return data
                })
        },
        register({commit}, input) {
            return register(input)
                .then((data) => {
                    commit('setSelf', data.user)
                    commit('setAccessToken', data.accessToken)
                    return data
                })
        },
        signOut({commit}) {
            commit('setSelf', null)
            commit('setAccessToken', null)
        }
    },

    mutations: {
        setSelf(state, data) {
            state.self = data;
        },
        setAccessToken(state, data) {
            state.accessToken = data;
        },
    },

    state: defaultState()
}
