import { AppState } from '../AppState'
import { api } from './AxiosService'
import router from '../router'

class BlogService {
  async getAll() {
    try {
      const res = await api.get('blogs')
      AppState.blogs = res.data
    } catch (error) {
      error.console.log(error)
    }
  }

  async getComments(blogId) {
    try {
      const res = await api.get('blogs/' + blogId + '/comments')
      AppState.comments = res.data
      // eslint-disable-next-line no-console
      console.log(AppState.comments)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  async getActiveBlog(blogId) {
    try {
      const res = await api.get('blogs/' + blogId)
      AppState.activeBlog = res.data
      console.log(AppState.activeBlog)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  async getMyBlogs() {
    try {
      const res = await api.get('profile/blogs')
      AppState.myItems = res.data
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  async create(data) {
    try {
      await api.post('', data)
      router.push({ name: 'Home' })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  async postComment(data) {
    try {
      const newComment = {
        body: data,
        blog: AppState.activeBlog.id
      }
      const res = await api.post('/comments', newComment)
      console.log(res)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  async deleteComment(cId) {
    try {
      await api.delete('/comments/' + cId)
      this.getComments()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  async deleteBlog(id) {
    try {
      if (window.confirm('really? delete it?')) {
        await api.delete('' + id)
        router.push({ name: 'Home' })
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  async editBlog(data) {
    try {
      const editedBlog = {
        body: data
      }
      const res = await api.put('' + editedBlog)
      // eslint-disable-next-line no-console
      console.log(res.data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}
export const blogService = new BlogService()
