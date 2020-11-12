<template>
  <div class="shop-Cart">
      <div class="msg">新用户下单立减5元</div>
      <div class="del">
        <p>购物车</p>
        <div>
          <i>icon</i>
          <a>清空购物车</a>
        </div>
      </div>
          <div v-for="(item, i) in getFoodsList" :key="i">
           <div class="fooditem">
             <p>{{ item.name }}</p>
             <p class="price">￥{{ item.price }}</p>
             <van-stepper @change="changFoodNum($event,item)"  v-model="item.num" theme="round" button-size="22" disable-input />
           </div>
          </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  @Component({
    computed: {
      getGoodsList() {
        return this.$store.getters.getGoodsList
      },

     // 获取vuex的数据
      ...mapState(['count']), // ==$store.state.count 
      ...mapGetters(['getFoodsList'])
    },
    methods: {
      getList() {
        //  console.log(this.$store.dispatch('getGoods'))
      },
       changFoodNum(num,food) {
          this.$store.commit('changeGoodsByFood',food)
      }
    }
  })
  export default class  extends Vue {
     created() {
       this.getList()
     }
  }
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
.fooditem{
  display: flex;
  // height: 100px;
  position: relative;
  margin-top: 20px;
  p:first-child{
    width: 50%;
    margin-right: 20px;
  }
  p.price{
    font-weight: 700;
    color: #f00;
  }
  .van-stepper {
    position: absolute;
    top: 0;
    right: 10px;
  }
}
.shopCart-enter-active {
  transition: all .3s ease;
}
.shopCart-leave-active {
  transition: all .5s ease;
}
.shopCart-enter, .shopCart-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(300px);
  opacity: 0;
}
.shop-Cart{
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.9;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  background: rgb(255, 243, 239);
  overflow: hidden;
  
  div.msg {
     height: 30px;
     width: 100%;
     background: rgb(255, 188, 63);
     color: #f00;
     text-align: center;
     line-height: 30px;
  }
  .del {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    div{
      color: #666;
      a{
        color: #666;
      }
    }
  }
}
</style>
