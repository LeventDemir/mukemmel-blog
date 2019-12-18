<template>
  <div>
    <div v-for="i in 6" :key="i" class="col s12 m6">
      <Card />
    </div>
  </div>
</template>


<script>
import Card from "@/components/card";

export default {
  components: { Card }
};
</script>