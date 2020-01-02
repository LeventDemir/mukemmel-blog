<template>
  <footer class="indigo page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">LeventCode</h5>
          <p
            class="grey-text text-lighten-4"
          >You can use rows and columns here to organize your footer contentyour footer contentyour footer contentyour footer content.</p>
          <p>
            <i class="material-icons left">phone</i>+90 553 061 5830
          </p>
          <p>
            <i class="material-icons left">email</i>leventcoding@gmail.com
          </p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Menu</h5>
          <ul>
            <nuxt-link :to="{ name: 'index' }" tag="li">
              <a class="grey-text text-lighten-3">Home</a>
            </nuxt-link>
            <nuxt-link :to="{ name: 'about-me' }" tag="li">
              <a class="grey-text text-lighten-3">About me</a>
            </nuxt-link>
            <nuxt-link v-if="!$store.getters['user/getAuth']" :to="{ name: 'login' }" tag="li">
              <a class="grey-text text-lighten-3" href="#!">Login</a>
            </nuxt-link>
            <nuxt-link v-else :to="{ name: 'dashboard', query: { page: 1 } }" tag="li">
              <a class="grey-text text-lighten-3" href="#!">Dashboard</a>
            </nuxt-link>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        <div class="center">© 2019 Copyright Text</div>
      </div>
    </div>
  </footer>
</template>