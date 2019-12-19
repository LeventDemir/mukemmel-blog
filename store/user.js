export const state = () => ({
    token: null,
    auth: null

})


export const getters = {
    getToken(state) {
        return state.token
    },
    getAuth(state) {
        return state.auth
    }
}


export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    setAuth(state, auth) {
        state.auth = auth
    }
}


export const actions = {
    login({ commit }, user) {
        this.$axios.post('/user/login', user).then(response => {
            if (response.data.token) {
                commit('setToken', response.data.token)
                commit('setAuth', true)
                M.toast({ html: 'logged in', classes: 'green' })
                this.$router.push({ name: 'index' })
            } else {
                M.toast({ html: 'something went wrong', classes: 'red' })
            }
        })
    },
    logout({ getters, commit }) {
        this.$axios.post('/user/logout', { token: getters.getToken })
            .then(() => {
                commit('setToken', null)
                commit('setAuth', false)
                M.toast({ html: 'logged out', classes: 'green' })
                this.$router.push({ name: 'index' })
            })
    }
}