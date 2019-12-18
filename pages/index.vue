<template>
  <div class="col s12">
    <div class="row">
      <div v-for="i in 6" :key="i" class="col s12 m6">
        <Card />
      </div>
    </div>

    <br />

    <div class="row">
      <Pagination />
    </div>

    <br />
  </div>
</template>


<script>
import Card from "@/components/card";
import Pagination from "@/components/pagination";

export default {
  components: { Card, Pagination }
};
</script>