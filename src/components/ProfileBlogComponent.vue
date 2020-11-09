<template>
  <div class="ProfileBlog card shadow-lg rounded col-3 m-4">
    <router-link :to="{name: 'Blog' ,params: {blogId: blogProp._id}}">
      <h1>{{ blogProp.title }}</h1>
    </router-link>
    <h3>{{ blogProp.body }}</h3>
    <button @click="deleteBlog" type="button" class="mb-3 btn btn-danger">
      Delete Blog
    </button>
  </div>
</template>

<script>
import { AppState } from '../AppState'
// import { computed } from 'vue'
import { blogService } from '../services/BlogService'
// import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
  name: 'ProfileBlog',
  props: {
    blogProp: Object
  },
  setup(props) {
    // const route = useRoute()
    return {
      deleteBlog() {
        blogService.deleteBlog(props.blogProp._id)
      },
      editBlog() {
        blogService.editBlog()
      },
      blogs: computed(() => AppState.myItems),
      profile: computed(() => AppState.profile)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
