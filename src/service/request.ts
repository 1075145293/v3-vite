import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
const instance : AxiosInstance = axios.create({
  timeout: 60000,
  baseURL: import.meta.env.VITE_APP_BASE_API
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log(config)
    return config
  },
  (error: any) => {
    console.log(error)
  }
)
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      // return Promise.resolve(response.data);
      return response
    } else {
      return Promise.reject(response.data)
    }
  }
)
export default instance
