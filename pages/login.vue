<template>
  <div class="col s12">
    <div class="card hoverable">
      <div class="card-content">
        <form @submit.prevent="$store.dispatch('user/login', user)">
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">person</i>
              <input id="username" v-model="user.username" type="text" class="validate" required />
              <label for="username">Username</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">lock</i>
              <input
                id="password"
                v-model="user.password"
                type="password"
                class="validate"
                required
              />
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row center">
            <button class="btn indigo">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  }
};
</script>