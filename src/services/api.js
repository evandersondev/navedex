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
    console.log(data)
  },

  async createNaver({ name, age, projects, office, timeJob, avatar }) {
    await api.post('navers', {
      name,
      birthdate: age.toLocaleDateString('pt-BR'),
      project: projects,
      job_role: office,
      admission_date: timeJob.toLocaleDateString('pt-BR'),
      url: avatar,
    })
  },
}
