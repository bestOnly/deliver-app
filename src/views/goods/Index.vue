<template>
  <div class="box-main" ref="goodsbox" :style="{ height: boxHeight}">
     <div class="box-left">
       <van-sidebar v-model='activeKeys'>
        <van-sidebar-item @click="onChange" :title="item.name" v-for="(item,i) in getGoodsList" :key="i"/>
      </van-sidebar>
     </div>
     <div class="box-right">
       <div>
         <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
          <div :id="'sub_'+ i" v-for="(item,i) in getGoodsList" :key="i">
            <h3>{{ item.name }}</h3>
            <div class="foodBox" v-for="(food,x) in item.foods" :key="x" @click="showGoods(food)">
              <van-card
                  :price="food.price"
                  :desc="food.goodsDesc"
                  :title="food.name"
                  :thumb="food.imgUrl"
                  origin-price="20.00"
                />
                <van-stepper @change="changFoodNum($event,food)" v-model="food.num" theme="round" button-size="18" disable-input />
              </div>
            </div>
         <!-- </van-pull-refresh> -->
        </div>
     </div>
      <!-- 商品放大图 -->
      <Food :food="food" ref="foodBox"/>
       <!-- 购物车 -->
     <div class="shopCart" @click="isShow = !isShow">
         <div>
           <van-icon name="smile-o" />
           <p>联系商家</p>
           </div>
         <div :style="isZero ? 'background: rgb(255, 188, 63)' : ''">
           <van-icon name="shopping-cart" />
         </div>
         <div>
           <p>￥0.00</p>
           <span>另需配送费4元 | 支持自取</span>
         </div>
         <div :class="isShow ? 'active' : ''" v-if="!isShow">￥20元起送</div>
         <div :class="isShow ? 'active' : ''" v-else style="text-align:center">去结算</div>
     </div>
     <!-- 全局组件 -->
     <transition name="shopCart">
       <shopcart v-show="isShow"></shopcart>
     </transition>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Sidebar, SidebarItem, Card, Stepper, Icon, PullRefresh } from 'vant';
  Vue.use(Card);
  Vue.use(Sidebar);
  Vue.use(Stepper);
  Vue.use(SidebarItem);
  Vue.use(Icon);
  Vue.use(PullRefresh);
  // better-scroll
  import BetterScroll from 'better-scroll'
  // vant 提示
 import { Toast } from 'vant';
import { mapMutations } from 'vuex';

let bsRight: any;
let bsLeft;
import Food from '@/components/Food.vue'
declare module 'vue/types/vue' {
  interface Vue {
    goodsList: any;
    boxHeight: any;
    isLoading: any;
    getGoods: any;
    getHeight: any;
    scrollOffsetHeight: any;
  }
}
// declare global {
//   interface window {
//     offsetHeight: any;
//   }
// }
type elHeight = {
  index: number;
  start: number;
  end: number;
}

  @Component({
    components: {
      Food
    },
    methods: {
      // 获取元素距顶部高度
      getHeight() {
        const goodsboxHeight: any = this.$refs.goodsbox
        const restHeight = window.innerHeight- goodsboxHeight.offsetTop
        this.boxHeight = restHeight +'px'
      },
      // 下拉刷新
      onRefresh() {
        setTimeout(() => {
          Toast('刷新成功');
          this.isLoading = false;
        }, 1000);
      },
      // 电梯导航
      onChange(i) {
         const id = `#sub_${i}`
         bsRight.scrollToElement(id, 1000, 0, 0)
      },
      changFoodNum(num,food) {
          this.$store.commit('changeGoodsByFood',food)
      },
      showGoods(food) {
        console.log(food);
        this.food = food
        // this.$refs.foodBox.showOrHide()
      }
    },
    computed: {
        // 滑动页面显示相应标题
        scrollOffsetHeight() {
                const arr: any[] = []
                let start = 0
                let lastEnd = 0
                this.$store.getters.getGoodsList.forEach((item: any, i: any) => {
                  const els = `#sub_${i}`
                  const elDom = document.querySelector(els)
                  const elHeight = elDom.offsetHeight
                  if(start !== 0){
                    start = lastEnd + 1
                  }else {
                    start = lastEnd
                  }
                  lastEnd = start + elHeight
                  arr.push({
                    index: i,
                    start: start,
                    end: lastEnd
                  })
                })
                return arr
              },
              // 从vuex 里面获取商品数据
              getGoodsList() {
                return this.$store.getters.getGoodsList
              },
              isZero() {
                 return this.$store.getters.getGoodsList.length !== 0
              }
    }
  })
  export default class extends Vue {
    isShowBox: false
    food: {}
    count= 0
    isLoading= false
    numValue = ''
    activeKeys = 0
    goodsList = []
    boxHeight = 0
    isShow = false
    num = 0
    created() {
      this.$store.dispatch('getGoods')
    }
    mounted () {
      this.getHeight()
       // 丝滑滚动
      //  this.$nextTick(() => {
         bsLeft = new BetterScroll('.box-left', {
           scrollY: true,
           click: true
         })
         bsRight = new BetterScroll('.box-right', {
         scrollY: true,
         click: true,
         probeType: 2
       })
      // })
      bsRight.on('scroll', (position: any) => {
        const yOffetHeight = Math.abs(position.y)
        const diffHeight = this.scrollOffsetHeight
          diffHeight.forEach( (item: any, i: any) => {
            const HeightItem = item
           if( yOffetHeight >= HeightItem.start && yOffetHeight <= HeightItem.end){
               this.activeKeys = i
               return
           }
        })
      })
    }
  }
</script>

<style scoped lang="less">

.box-main{
  width: 100%;
  display: flex;
  height: 100%;
  // margin-bottom: 50px;
}
.box-left{
   width: 100px;
   height: 100%;
   overflow: scroll;
}
.box-right{
  flex: 1;
  height: 100%;
  overflow: scroll;
}
.van-sidebar{
  width: 100%;
}
.foodBox{
  position: relative;
}
.van-stepper{
  position: absolute;
  right: 5px;
  bottom: 10px;
}
.van-card__title {
  font-size: 14px;
  font-weight: 700;
}
.van-card__price{
  color: red;
}
.shopCart{
  width: 95%;
  height: 50px;
  // background: #333;
  background: rgba(0, 0, 0, .6);
  position: fixed;
  z-index: 999;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  border-radius: 25px;
  display: flex;
  color: #fff;
  font-size: 14px;
  overflow: hidden;
  div:first-child{
    text-align: center;
    border-right: 4px solid #fff;
    padding: 8px;
  }
  div:nth-child(2){
    width: 40px;
    height: 40px;
    background: #666;
    border-radius: 50px;
    margin: 5px 10px 0 5px;
    text-align: center;
    line-height: 48px;
    font-size: 25px;
  }
  div:nth-child(3){
     line-height: 20px;
     margin-top: 6px;
     p{
       font-size: 18px;
       font-weight: 700;
     }
     span{
       font-size: 12px;
     }
  }
  div:last-child{
     padding: 10px;
     line-height: 30px;
     margin-left: 20px;
     width: 86px;
  }
  .active{
    background: rgb(255, 188, 63);
  }
}
</style>
