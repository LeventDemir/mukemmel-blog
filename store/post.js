export const state = () => ({
    posts: [],
    pageCount: null
})


export const getters = {
    getPosts(state) {
        return state.posts
    },
    getPageCount(state) {
        return state.pageCount
    }
}


export const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    },
    setPageCount(state, pageCount) {
        state.pageCount = Math.ceil(+pageCount / 4)
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
    delete({ rootGetters, dispatch }, post) {
        this.$axios.post('/post/delete', { post }, { params: { token: rootGetters['user/getToken'] } })
            .then(response => {
                if (response.data.success) {
                    dispatch('posts')
                    M.toast({ html: 'post deleted successfully', classes: 'green' })
                } else {
                    M.toast({ html: 'something went wrong', classes: 'red' })
                }
            })
    },
    posts({ commit }, page) {
        return this.$axios.get('/post/posts', { params: { page } })
            .then(response => {
                commit('setPosts', response.data.posts)
                commit('setPageCount', response.data.count)
            })
    },
    post({ }, post) {
        return this.$axios.get('/post/post', { params: { post } })
    }
}