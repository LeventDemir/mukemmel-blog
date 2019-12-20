<template>
  <div class="card hoverable">
    <div class="card-content">
      <form @submit.prevent="create">
        <div class="row">
          <div class="input-field col s12">
            <input id="title" v-model="post.title" type="text" class="validate" required />
            <label for="title">Title</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="article" v-model="post.article" type="text" class="validate" required />
            <label for="article">Article</label>
          </div>
        </div>
        <div class="file-field input-field">
          <div class="btn amber">
            <span>Photo</span>
            <input type="file" accept="image/*" @change="uploadPhoto" required />
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" />
          </div>
        </div>
        <br />
        <div class="row center">
          <button class="btn indigo">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      post: {
        photo: "",
        title: "",
        article: ""
      }
    };
  },
  methods: {
    create() {
      this.$store.dispatch("post/create", this.post);
    },
    uploadPhoto(e) {
      const files = e.target.files || e.dataTransfer.files;

      if (!files.length) return;

      const reader = new FileReader();

      if (files[0].size / (1024 * 1024) < 6) {
        const vm = this;
        reader.onload = e => (vm.post.photo = e.target.result);
        reader.readAsDataURL(files[0]);
        this.post.photo = "";
      }
    }
  }
};
</script>