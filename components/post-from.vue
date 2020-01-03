<template>
  <div class="card hoverable">
    <div class="card-content">
      <form @submit.prevent="submit">
        <div class="row">
          <div class="input-field col s12">
            <input id="title" v-model="post.title" type="text" class="validate" required />
            <label for="title" :class="{ 'active' : post.title }">Title</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <VueEditor v-model="post.article" />
          </div>
        </div>
        <div class="file-field input-field">
          <div class="btn amber">
            <span>Photo</span>
            <input type="file" accept="image/*" @change="uploadPhoto" :required="!post.photo" />
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" />
          </div>
        </div>
        <br />
        <div class="row center">
          <button class="btn indigo">{{ operation }}</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    operation: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      post: {
        photo: "",
        title: "",
        article: ""
      }
    };
  },
  mounted() {
    if (this.operation === "edit") {
      this.post.photo = this.data.photo;
      this.post.title = this.data.title;
      this.post.article = this.data.article;
    }
  },
  methods: {
    submit() {
      if (this.operation === "create") {
        this.$store.dispatch("post/create", this.post);
      } else {
        this.$store.dispatch("post/edit", { ...this.post, _id: this.data._id });
      }
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