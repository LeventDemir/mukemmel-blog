<template>
  <div class="col s12">
    <span style="font-size: 28px">Dashbord</span>
    <nuxt-link
      :to="{ name: 'dashboard-create-post' }"
      tag="button"
      class="btn indigo right"
    >Create Post</nuxt-link>
    <i class="material-icons amber-text right" style="margin-right: 20px; font-size: 38px">search</i>
    <hr />
    <br />

    <div class="row">
      <div v-for="i in 6" :key="i" class="col s12 m6">
        <Card />
      </div>
    </div>

    <br />

    <Pagination />
  </div>
</template>


<script>
import Card from "@/components/card";
import Pagination from "@/components/pagination";

export default {
  middleware: "auth",
  components: { Card, Pagination }
};
</script>