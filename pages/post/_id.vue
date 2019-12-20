<template>
  <div class="col s10 offset-s1">
    <img width="100%" :src="data.photo" />

    <h3>{{ data.title }}</h3>

    <p>{{ data.article }}</p>
  </div>
</template>


<script>
export default {
  asyncData({ store, params }) {
    return store.dispatch("post/post", params.id).then(response => {
      return { data: response.data };
    });
  }
};
</script>