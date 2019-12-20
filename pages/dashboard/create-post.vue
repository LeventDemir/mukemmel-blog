<template>
  <div class="col s12">
    <PostForm operation="create" />
  </div>
</template>


<script>
import PostForm from "@/components/post-from";

export default {
  middleware: "auth",
  components: { PostForm }
};
</script>