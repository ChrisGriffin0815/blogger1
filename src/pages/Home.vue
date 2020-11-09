<template>
  <div class="home bg-secondary">
    <div class="text-center pb-5 pt-5 row container-fluid justify-content-center ">
      <div class="d-flex flex-column align-items-center ">
        <img
          alt="Vue logo"
          src="../assets/logo.png"
          width="50"
        />
      </div>
      <div class="text-dark text-shadow">
        <h1>ue deezBlogs</h1>
      </div>
      <div class="row justify-content-center">
        <BlogComponent v-for="b in blogData" :key="b._id" :blog-prop="b" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { blogService } from '../services/BlogService'
import BlogComponent from '../components/BlogComponent'
import { AppState } from '../AppState'
export default {
  components: { BlogComponent },
  name: 'Blog',
  setup() {
    onMounted(() => { blogService.getAll() })
    return {
      // // state,
      blogData: computed(() => AppState.blogs)
      // user: computed(() => AppState.user)

      // createBlog() {
      //   blogService.createBlog(state.newBlog)
      // }
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
