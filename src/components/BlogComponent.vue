<template>
  <div class="blog-component card shadow-lg rounded col-3 m-4">
    <router-link :to="{name: 'Blog' , params: {blogId: blogProp._id}}">
      <h1>{{ blogProp.title }}</h1>
    </router-link>
    <router-link v-if="profile.email == blog.creatorEmail" :to="{name: 'Profile'}">
      <h5 class="text-success on-hover" v-if="profile.email == blog.creatorEmail">
        Authored by: You
      </h5>
    </router-link>
    <h5 v-else-if="profile.email != blog.creatorEmail">
      Authored By: {{ blog.creatorEmail }}
    </h5>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  name: 'BlogComponent',
  components: {},
  props: {
    blogProp: Object
  },
  setup(props) {
    return {
      profile: computed(() => AppState.profile),
      blog: computed(() => props.blogProp)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
