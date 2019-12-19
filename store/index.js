export const actions = {
    nuxtServerInit({ commit, dispatch }, { req }) {
        const tokenIndex = req.rawHeaders.findIndex(item => item.substr(0, 5) == 'token')

        if (tokenIndex > -1) {
            const token = req.rawHeaders[tokenIndex].substr(6)

            commit("user/setToken", token)

            return dispatch('user/auth')
        }
    }
}