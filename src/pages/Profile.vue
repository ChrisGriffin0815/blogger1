<template>
  <div class="text-center bg-chartruese">
    <h1>Welcome, Chris</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="create">
          <div class="row">
            <div class="col">
              <input type="text" v-model="state.newBlog.title" class="form-control" placeholder="Title">
            </div>
            <div class="col">
              <input type="text" v-model="state.newBlog.body" class="form-control" placeholder="Body">
            </div>
            <div>
              <div class="form-check form-check-inline">
                <input class="form-check-input unchecked" type="checkbox" id="inlineCheckbox1" v-model="state.newBlog.published">
                <label class="form-check-label" for="inlineCheckbox1">Publish?</label>
              </div>
              <button class="btn btn-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row justify-content-around">
      <ProfileBlog v-for="b in blogs" :key="b._id" :blog-prop="b" />
    </div>
  </div>
</template>

<script>
// import { profileService } from '../services/ProfileService'
import { computed, onMounted, reactive } from 'vue'
// import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
// import blogService from '../services/BlogService'
import ProfileBlog from '../components/ProfileBlogComponent'
import { blogService } from '../services/BlogService'
// import { useRoute } from "vue-router"
export default {
  name: 'Profile',
  components: { ProfileBlog },
  setup() {
    const state = reactive({
      newBlog: {
        published: false
      }
    })
    // const route = useRoute()
    onMounted(() => blogService.getMyBlogs())
    return {
      state,
      profile: computed(() => AppState.profile),
      blogs: computed(() => AppState.myItems),
      removeBlog() {
        blogService.removeBlog(state._id)
      },
      create() {
        blogService.create(state.newBlog)
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
