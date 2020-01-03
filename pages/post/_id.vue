<template>
  <div class="col s10 offset-s1">
    <img width="100%" :src="data.photo" />

    <h3>{{ data.title }}</h3>

    <VueEditor id="article" :disabled="true" v-model="data.article" :editor-toolbar="[[],[],[]]" />
  </div>
</template>


<script>
export default {
  asyncData({ store, params }) {
    return store.dispatch("post/post", params.id).then(response => {
      return { data: response.data };
    });
  },
  mounted() {
    if (process.client) {
      const toolbar = document.getElementsByClassName("ql-toolbar ql-snow");
      const container = document.getElementsByClassName("ql-container ql-snow");

      toolbar[0].className = "";
      container[0].style = "border:0";
    }
  }
};
</script>