<template>
  <div>
    <!-- <div class="header">1</div> -->
     <div class="nav">
       <router-link to="/dashboard/goods" active-class="tab-active">商品</router-link>
       <router-link to="/dashboard/merchant" active-class="tab-active">评价</router-link>
       <router-link to="/dashboard/commits" active-class="tab-active">商家</router-link>
     </div>
       <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Tabbar, TabbarItem } from 'vant';
  Vue.use(Tabbar);
  Vue.use(TabbarItem);

  @Component
  export default class  extends Vue {
    active= 0
  }
</script>

<style scoped lang="less">
.nav{
  background: rgb(255, 255, 255);
  height: 50px;
  display: flex;
  border-bottom: 1px solid #eee;
  a{
    width: 100%;
    text-align: center;
    line-height: 50px;
    display:inline-block;
  }
}
.tab-active{
  color: rgb(255, 198, 77);
  position: relative;
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 50%;
    transform: translate(50%);
    background-color: rgb(255, 198, 77);
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>