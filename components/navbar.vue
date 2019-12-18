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
            <nuxt-link :to="{ name: 'login' }" tag="li">
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
      <nuxt-link :to="{ name: 'index' }" tag="li">
        <a class="waves-effect">Home</a>
      </nuxt-link>
      <nuxt-link :to="{ name: 'about-me' }" tag="li">
        <a class="waves-effect">About me</a>
      </nuxt-link>
      <nuxt-link :to="{ name: 'login' }" tag="li">
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
  }
};
</script>