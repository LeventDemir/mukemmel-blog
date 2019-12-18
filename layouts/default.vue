<template>
  <div>
    <Navbar />

    <main>
      <br />
      <br />

      <div class="container">
        <div class="row">
          <nuxt />
        </div>
      </div>

      <br />
      <br />
    </main>

    <Footer />
  </div>
</template>


<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default {
  components: { Navbar, Footer }
};
</script>