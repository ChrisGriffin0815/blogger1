import { AppState } from '../AppState'
import { api } from './AxiosService'

class ProfileService {
  async getProfile() {
    try {
      const res = await api.get('https://cw-bloggr.herokuapp.com/api/profile')
      AppState.profile = res.data
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }
}

export const profileService = new ProfileService()
