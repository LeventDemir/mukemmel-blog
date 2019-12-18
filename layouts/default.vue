<template>
  <div>
    <Navbar />

    <main>
      <div class="container">
        <div class="row">
          <nuxt />
        </div>
      </div>
    </main>
  </div>
</template>


<script>
import Navbar from "@/components/navbar";

export default {
  components: { Navbar }
};
</script>