import Vue from 'vue'
import Vuex from 'vuex'
import { goods } from '../apis/apiList'
import getGoods from '../apis/order'

Vue.use(Vuex)

type foodsBox = {
  foods: any;
}

const store = new Vuex.Store({
  state: {
     goodsList: [],
     count: 1
  },
  getters: {
    getGoodsList(state) {
      return state.goodsList
    },
    getFoodsList(state) {
       const foodArr: any = []
       state.goodsList.forEach((cate: any) => {
        cate.foods.forEach((food: any) => {
             if(food.num > 0) {
               foodArr.push(food)
             }
         })
       });
       return foodArr
    }
  },
  mutations: {
    setGoodsList(state, goodsList) {
      state.goodsList = goodsList
    },
  //   changNum(state, {cateIndex, id, num}){
  //     console.log('我进来了');
  //     const tempArr: Array<foodsBox> = state.goodsList
  //     const foods = tempArr[cateIndex].foods;
  //     for (let i =0; i < foods.length; i++ ) {
  //      if (id === foods[i].id) {
  //          foods[i].num += num;
  //          return;
  //      }
  //     }
  //  }
  changeGoodsByFood(state,food) {
    for(let i =0; i < state.goodsList.length; i ++) {
        const tmpFoodsContainer: any = state.goodsList[i];
        const foods = tmpFoodsContainer.foods;
        for(let j =0; j < foods.length; j ++) {
            if (foods[j].id === food.id) {
                console.log('替换了商品')
                foods[j] = food;
            }
        }
    }
}
  },
  actions: {
       // 获取商品信息
       async getGoods(store) {
        const { data } = await getGoods.getGoodsList(goods)
        data.goodsList.forEach((item: any) => {
          item.foods.forEach((list: any) => {
            list.num = 0
          })
        })
        console.log(store.state.goodsList);
        console.log(data.goodsList);
        
        store.commit('setGoodsList', data.goodsList)
    }
  }
})

export default store