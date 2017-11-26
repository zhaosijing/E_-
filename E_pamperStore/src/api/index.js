//包含ajax请求的代码
import axios from 'axios'

export const RESULT_OK = 0
export function reqFirstPage() {
  return axios.get('/api2/firstPage')
}

export function reqCategory() {
  return axios.get('/api2/category')
}
export function reqClassify() {
  return axios.get('/api2/classify')
}
export function reqBrand() {
  return axios.get('/api2/brand')
}
export function reqShopcart() {
  return axios.get('/api2/shopcart')
}

export function reqMine() {
  return axios.get('/api2/mine')
}

