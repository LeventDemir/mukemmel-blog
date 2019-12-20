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
    create({ rootGetters }, post) {
        this.$axios.post('/post/create', post, { params: { token: rootGetters['user/getToken'] } })
            .then(response => {
                if (response.data.success) {
                    M.toast({ html: 'post created successfully', classes: 'green' })
                    this.$router.push({ name: 'dashboard' })
                } else {
                    M.toast({ html: 'something went wrong', classes: 'red' })
                }
            })
    }
}