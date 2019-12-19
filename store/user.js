import cookie from 'js-cookie'


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
                cookie.set('token', response.data.token)
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
                cookie.remove('token')
                commit('setToken', null)
                commit('setAuth', false)
                M.toast({ html: 'logged out', classes: 'green' })
                this.$router.push({ name: 'index' })
            })
    },
    auth({ getters, commit }) {
        return this.$axios.get('/user/is-auth', { params: { token: getters.getToken } })
            .then(response => commit('setAuth', response.data.auth))
    }
}