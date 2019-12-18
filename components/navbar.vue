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
            <li>
              <a href="sass.html">Home</a>
            </li>
            <li>
              <a href="badges.html">About me</a>
            </li>
            <li>
              <a href="collapsible.html">Login</a>
            </li>
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
      <li>
        <a class="waves-effect">About me</a>
      </li>
      <li>
        <a class="waves-effect">Login</a>
      </li>
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