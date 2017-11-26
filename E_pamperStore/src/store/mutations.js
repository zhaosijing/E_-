
import {
  FIRSTPAGE,
  CATEGORY,
  CLASSIFY,
  BRAND,
  SHOPCART,
  MINE
} from './mutation-types'

export default {
  [FIRSTPAGE](state,{firstPage}){
    state.firstPage = firstPage
  },
  [CATEGORY](state,{category}){
    state.category = category
  },

  [CLASSIFY](state,{classify}){
    state.classify = classify
  },
  [BRAND](state,{brand}){
    state.brand = brand
  },
  [SHOPCART](state,{shopcart}){
    state.shopcart = shopcart
  },
  [MINE](state,{mine}){
    state.mine = mine
  },
}
