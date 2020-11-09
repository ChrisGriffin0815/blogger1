<template>
  <div class="CommentsComponent card text-center shadow-lg m-3">
    <div>
      <p>{{ cprop.creator.name }} says:</p>
      <h5>{{ cprop.body }}</h5>
    </div>
    <div>
      <button v-if="profile.email == cprop.creatorEmail" @click="deleteComment" class="btn btn-block btn-link text-danger">
        Delete Your Comment
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { blogService } from '../services/BlogService'
export default {
  name: 'CommentsComponent',
  props: ['cprop'],
  setup(props) {
    return {
      comment: computed(() => AppState.comments),
      profile: computed(() => AppState.profile),
      deleteComment() {
        blogService.deleteComment(props.cprop._id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
