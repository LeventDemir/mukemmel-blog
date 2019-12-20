export const state = () => ({
    posts: []
})


export const getters = {
    getPosts(state) {
        return state.posts
    }
}


export const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    }
}


export const actions = {
    create({ rootGetters, dispatch }, post) {
        this.$axios.post('/post/create', post, { params: { token: rootGetters['user/getToken'] } })
            .then(response => {
                if (response.data.success) {
                    dispatch('posts')
                    M.toast({ html: 'post created successfully', classes: 'green' })
                    this.$router.push({ name: 'dashboard' })
                } else {
                    M.toast({ html: 'something went wrong', classes: 'red' })
                }
            })
    },
    edit({ rootGetters, dispatch }, post) {
        this.$axios.post('/post/edit', post, { params: { token: rootGetters['user/getToken'] } })
            .then(response => {
                if (response.data.success) {
                    dispatch('posts')
                    M.toast({ html: 'post edited successfully', classes: 'green' })
                    this.$router.push({ name: 'dashboard' })
                } else {
                    M.toast({ html: 'something went wrong', classes: 'red' })
                }
            })
    },
    posts({ commit }) {
        return this.$axios.get('/post/posts').then(response => commit('setPosts', response.data))
    },
    post({ }, post) {
        return this.$axios.get('/post/post', { params: { post } })
    }
}