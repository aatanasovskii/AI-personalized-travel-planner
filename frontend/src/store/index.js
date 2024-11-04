import {createStore} from 'vuex'
import createPersistedState from "vuex-plugin-persistedstate";
import auth from "@/store/auth.js"

const Store = createStore({
    modules: {
        auth,
    },
    plugins: [createPersistedState({
            key: 'travel_planner',
            paths: ["auth"]
        }
    )],
    actions: {
        self({dispatch}) {
            return dispatch('auth/self')
        }
    }
})

export default Store
