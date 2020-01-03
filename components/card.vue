<template>
  <div class="card hoverable">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" :src="data.photo" />
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{{ data.title }}</span>
      <div class="hide-article" v-html="data.article"/>
      <p>
        <nuxt-link :to="{name:'post-id', params: { id: data._id }}" tag="a">read more...</nuxt-link>
      </p>
    </div>
    <div v-if="admin" class="card-action">
      <nuxt-link
        :to="{ name: 'dashboard-update-post-id', params: { id: data._id } }"
        class="green-text"
        tag="a"
      >Edit</nuxt-link>
      <a
        @click="$store.dispatch('post/delete', { id: data._id, page: $route.query.page })"
        class="red-text right"
      >Delete</a>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>