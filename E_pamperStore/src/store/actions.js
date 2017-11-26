import {reqFirstPage,reqCategory,reqClassify,reqBrand,reqShopcart,reqMine,RESULT_OK} from '../api'

import {
  FIRSTPAGE,
  CATEGORY,
  CLASSIFY,
  BRAND,
  SHOPCART,
  MINE
} from './mutation-types'

/*先发送异步请求，在得到数据之后才提交mutation请求*/
export default {
  //获取首页信息数据
  getFirstPage({commit},cb){
    reqFirstPage().then(response=>{
      const result = response.data
      if(result.code===RESULT_OK){
        const firstPage = result.data
        //提交mutation请求
        commit(FIRSTPAGE,{firstPage})
        cb&&cb()
      }
    })
  },
  //获取分类信息数据
  getCategory({commit}){
    reqCategory().then(response=>{
      const result = response.data
      if(result.code===RESULT_OK){
        const category = result.data
        //提交mutation请求
        commit(CATEGORY,{category})
      }
    })
  },
  getClassify({commit}){
    reqClassify().then(response=>{
      const result = response.data
      if(result.code===RESULT_OK){
        const classify = result.data
        //提交mutation请求
        commit(CLASSIFY,{classify})
      }
    })
  },
  getBrand({commit}){
    reqBrand().then(response=>{
      const result = response.data
      if(result.code===RESULT_OK){
        const brand = result.data
        //提交mutation请求
        commit(BRAND,{brand})
      }
    })
  },
  //获取购物车信息数据
  getShopcart({commit}){
    reqShopcart().then(response=>{
      const result = response.data
      if(result.code===RESULT_OK){
        const shopcart = result.data
        //提交mutation请求
        commit(SHOPCART,{shopcart})
      }
    })
  },
  //获取商家信息数据
  getMine({commit}){
    reqMine().then(response=>{
      const result = response.data
      if(result.code===RESULT_OK){
        const mine = result.data
        //提交mutation请求
        commit(MINE,{mine})
      }
    })
  }
}
