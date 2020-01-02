<template>
  <ul class="pagination center">
    <li :class="currentPage > 1 ? 'waves-effect' : 'disabled'">
      <a @click="prevPage">
        <i class="material-icons">chevron_left</i>
      </a>
    </li>
    <li
      v-for="page in pageNumbers"
      :key="page"
      @click="goPage(page)"
      :class="page == currentPage ? 'active indigo' : 'waves-effect'"
    >
      <a>{{ page }}</a>
    </li>
    <li :class="currentPage < $store.getters['post/getPageCount'] ? 'waves-effect' : 'disabled'">
      <a @click="nextPage">
        <i class="material-icons">chevron_right</i>
      </a>
    </li>
  </ul>
</template>


<script>
export default {
  data() {
    return {
      currentPage: null,
      pageNumbers: [1, 2, 3, 4]
    };
  },
  mounted(){
    this.currentPage = this.$route.query.page || 1
  },
  methods: {
    nextPage() {
      if (this.$store.getters["post/getPageCount"] >= this.currentPage + 1) {
        this.currentPage++;

        if (this.currentPage > 4) {
          for (let number in this.pageNumbers) {
            this.pageNumbers[number]++;
          }
        }
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;

        if (this.currentPage == 4) {
          this.pageNumbers = [1, 2, 3, 4];
        } else if (this.currentPage > 4) {
          for (let number in this.pageNumbers) {
            this.pageNumbers[number]--;
          }
        }
      }
    },
    goPage(page) {
      this.currentPage = page;
      if ((page = 4)) {
        this.pageNumbers = [1, 2, 3, 4];
      }
    }
  },
  watch: {
    currentPage() {
      this.$router.push({
        name: this.$route.name,
        query: { page: this.currentPage }
      });
      this.$store.dispatch("post/posts", this.currentPage);
    }
  }
};
</script>