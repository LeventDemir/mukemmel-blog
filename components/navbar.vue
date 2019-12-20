<template>
  <header>
    <nav class="indigo">
      <div class="container">
        <div class="nav-wrapper">
          <nuxt-link :to="{ name: 'index' }" tag="a" class="brand-logo">LeventCode</nuxt-link>

          <a data-target="slide-out" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <nuxt-link :to="{ name: 'index' }" tag="li">
              <a>Home</a>
            </nuxt-link>
            <nuxt-link :to="{ name: 'about-me' }" tag="li">
              <a>About me</a>
            </nuxt-link>
            <nuxt-link
              v-if="$store.getters['user/getAuth']"
              @click.native="close"
              :to="{ name: 'dashboard' }"
              tag="li"
            >
              <a class="waves-effect">Dashboard</a>
            </nuxt-link>
            <li v-if="$store.getters['user/getAuth']">
              <a @click="$store.dispatch('user/logout')">Logout</a>
            </li>
            <nuxt-link v-else :to="{ name: 'login' }" tag="li">
              <a>Login</a>
            </nuxt-link>
          </ul>
        </div>
      </div>
    </nav>

    <ul id="slide-out" class="sidenav">
      <li>
        <a class="subheader">Menu</a>
      </li>
      <nuxt-link @click.native="close" :to="{ name: 'index' }" tag="li">
        <a class="waves-effect">Home</a>
      </nuxt-link>
      <nuxt-link @click.native="close" :to="{ name: 'about-me' }" tag="li">
        <a class="waves-effect">About me</a>
      </nuxt-link>
      <nuxt-link
        v-if="$store.getters['user/getAuth']"
        @click.native="close"
        :to="{ name: 'dashboard' }"
        tag="li"
      >
        <a class="waves-effect">Dashboard</a>
      </nuxt-link>
      <li v-if="$store.getters['user/getAuth']">
        <a @click="logout">Logout</a>
      </li>
      <nuxt-link v-else @click.native="close" :to="{ name: 'login' }" tag="li">
        <a class="waves-effect">Login</a>
      </nuxt-link>
    </ul>
  </header>
</template>


<script>
export default {
  mounted() {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  },
  methods: {
    close() {
      const elem = document.getElementById("slide-out");
      const instance = M.Sidenav.getInstance(elem);
      instance.close();
    },
    logout() {
      this.$store.dispatch("user/logout");
      this.close();
    }
  }
};
</script>