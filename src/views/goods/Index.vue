<template>
  <div>
     <button @click="sendAxios">点我</button>
  </div>
</template>

<script lang="ts">
  import order from '../../apis/order'
  import { Component, Vue } from 'vue-property-decorator';
  import ApiList from '../../apis/apiList'

  @Component({
     methods: {
       async sendAxios() {
         let data;
         try {
           data = await order.getGoodsList(ApiList.order)
         } catch (error) {
            console.log('ERROR 出错了！');
         }
        console.log(data)
       }
     }
  })
  export default class  extends Vue {
  }
</script>

<style scoped>

</style>