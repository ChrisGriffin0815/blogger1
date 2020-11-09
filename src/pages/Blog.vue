<template>
  <div class="Blog container-fluid bg-info">
    <div class="row justify-content-center pt-5 text-center">
      <h1>{{ blog.title }}</h1>
    </div>
    <div class="col-6 offset-3 p-2 text-center mt-5">
      <p>{{ blog.body }}</p>
      <p>by: {{ blog.creator.name }}</p>
    </div>
    <div class="row justify-content-center text-center mb-5">
      <div class="col-12">
      </div>
      <div class="col-6">
        <form class="form-group mt-5" @submit.prevent="postComment">
          <input type="text"
                 class="form-control mb-2"
                 aria-describedby="helpId"
                 placeholder="Comment here"
                 v-model="state.newComment.body"
          >
          <button @click="postComment" type="button" class="btn btn-success mt-3">
            Add Comment
          </button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <Comment v-for="c in comments" :key="c.body" :cprop="c" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { blogService } from '../services/BlogService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import Comment from '../components/CommentsComponent'
export default {
  name: 'Blog',
  components: { Comment },
  setup() {
    const route = useRoute()
    const state = reactive({
      newComment: {
        body: ''
      }

    })
    onMounted(() => {
      blogService.getActiveBlog(route.params.blogId)
      blogService.getComments(route.params.blogId)
    })
    return {
      state,
      profile: computed(() => AppState.profile),
      blog: computed(() => AppState.activeBlog),
      comments: computed(() => AppState.comments),
      removeBlog() {
        blogService.removeBlog(route.params.blogId)
      },
      postComment() {
        blogService.postComment(state.newComment.body)
      },
      deleteComment() {
        blogService.deleteComment(route.params.commentId)
      },
      editBlog() {
        blogService.editBlog(route.params.blogId)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
