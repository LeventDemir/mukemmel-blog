export default ({ store, redirect }) => {
    store.dispatch('user/auth')

    if(!store.getters['user/getAuth']){
        return redirect({ name: "login" })
    }
}