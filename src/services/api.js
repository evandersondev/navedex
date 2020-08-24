import { create } from 'axios'

const api = create({
  baseURL: 'https://navedex-api.herokuapp.com/v1/',
})

api.interceptors.request.use(request => {
  const token = localStorage.getItem('token')

  if (token) {
    request.headers.authorization = `Bearer ${token}`
  }

  return request
})

export default {
  async loginSession({ email, password }) {
    const {
      data: { token },
    } = await api.post('users/login', { email, password })

    return { token }
  },

  async fecthAllNavers() {
    const { data } = await api.get('navers')
    return data
  },

  async showNaver(id) {
    const { data } = await api.get(`navers/${id}`)

    return {
      ...data,
      birthdate: new Date(data.birthdate),
      admission_date: new Date(data.admission_date),
    }
  },

  async updateNaver(id, data) {
    await api.put(`navers/${id}`, {
      ...data,
      birthdate: data.birthdate.toLocaleDateString('pt-BR'),
      admission_date: data.admission_date.toLocaleDateString('pt-BR'),
    })
    return true
  },

  async createNaver(data) {
    await api.post('navers', {
      ...data,
      birthdate: data.birthdate.toLocaleDateString('pt-BR'),
      admission_date: data.admission_date.toLocaleDateString('pt-BR'),
    })
    return true
  },

  async deleteNaver(id) {
    await api.delete(`navers/${id}`)
    return true
  },
}
