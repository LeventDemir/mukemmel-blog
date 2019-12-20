<template>
  <div class="col s12">
    <PostForm :data="data" operation="edit" />
  </div>
</template>


<script>
import PostForm from "@/components/post-from";

export default {
  middleware: "auth",
  components: { PostForm },
  asyncData({ store, params }) {
    return store.dispatch("post/post", params.id).then(response => {
      return { data: response.data };
    });
  }
};
</script>