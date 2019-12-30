export const actions = {
    async nuxtServerInit({ commit, dispatch }, { req }) {
        const tokenIndex = await req.rawHeaders.findIndex(item => item.substr(0, 5) == 'token')

        if (tokenIndex > -1) {
            const token = await req.rawHeaders[tokenIndex].substr(6)

            await commit("user/setToken", token)

            await dispatch('user/auth')
            await dispatch('post/posts', 1)
        }
    }
}