//使用mockjs来模拟数据接口
import Mock from 'mockjs'
import data from './data2.json'

//映射接口
Mock.mock('/api2/firstPage',{
  code: 0,
  data: data.firstPage.petFirstPage
})
Mock.mock('/api2/category',{
  code: 0,
  data: data.category
})
Mock.mock('/api2/classify',{
  code: 0,
  data: data.classify
})
Mock.mock('/api2/brand',{
  code: 0,
  data: data.brand
})
Mock.mock('/api2/shopcart',{
  code: 0,
  data: data.shopcart
})
Mock.mock('/api2/mine',{
  code: 0,
  data: data.mine
})
