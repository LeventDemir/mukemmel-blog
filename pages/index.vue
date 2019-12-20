<template>
  <div class="col s12">
    <div class="row">
      <div v-for="post in $store.getters['post/getPosts']" :key="post._id" class="col s12 m6">
        <Card :data="post" :admin="false" />
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
  components: { Card, Pagination }
};
</script>