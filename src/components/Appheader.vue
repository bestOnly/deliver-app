<template>
   <div class="app-header">
       <div class="header-pic" :style='{"background-image":`url(${sellInfoList.avatar})`}'></div>
        <div class="header-mask"></div>
        <div class="header-msg">
            <span>公告</span>
            <span class="msg-word">{{ sellInfoList.bulletin }}</span>
            <span> > </span>
        </div>
        <div class="store-info">
            <div class="img">
               <img :src="`${sellInfoList.avatar}`" alt="">
            </div>
            <div class="title">
               <div class="alt">5个 > </div>
               <h3><span>品牌</span>{{sellInfoList.name }}</h3>
               <p>{{sellInfoList.description  }} / 38分钟送达</p>
               <p><span>减</span>{{ sellInfoList.supports && sellInfoList.supports.join('，') }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { seller } from '../../src/apis/apiList'
import SellInfo from "../apis/order";
  @Component
  export default class App extends Vue {
  sellInfoList= {}
  async created() {
     const { data } = await SellInfo.getSellInfo(seller)
     this.sellInfoList = data.data
    //  console.log(this.sellInfoList)
  }
}
</script>

<style lang="less" scoped>
.app-header{
   height: 160px;
   width: 100%;
   background: #ccc;
   position: relative;
   .header-pic{
     position: absolute;
     left: 0;
     top: 0;
     width: 100%;
     height: 100%;
    // background: url(http://127.0.0.1:5000/upload/shop/1590473180839.webp) no-repeat;
     background-size: cover;
     filter: blur(6px);
   }
   .header-mask{
     position: absolute;
     left: 0;
     top: 0;
     width: 100%;
     height: 100%;
     background: rgba(0, 0, 0, .3);
   }
   .header-msg{
     height: 30px;
     position: absolute;
     left: 0;
     bottom: 0;
     width: 100%;
    //  padding: 0 8px;
     background: rgba(58, 58, 58, 0.2);
     color:#fff;
     font-size:12px;
     line-height: 30px;
     overflow: hidden;
    display: flex;
     span:first-child{
       padding: 1px;
       background: #fff;
       color: #333;
       margin-right: 8px;
       font-weight: 700;
       margin-left: 10px;
     }
     .msg-word{
       width: 350px;
       height: 100%;
       overflow: hidden;
       -webkit-text-overflow: emphasis;
       white-space: nowrap;
     }
     span:last-child{
       display: inline-block;
       padding: 0 5px;
     }
   }
   .store-info{
     position: absolute;
     top: 30px;
     left: 50%;
     width: 80%;
     transform: translate(-50%);
     display: flex;
     color: #fff;
    //  justify-content: space-between;
     
       .img{
         width: 80px;
         height: 80px;
         background-color: royalblue;
         margin-right: 20px;
         img{
           width: 100%;
           border-radius: 8px;
         }
       }
       .title{
         width: 200px;
         height: 80px;
         h3{
           font-size: 18px;
           font-weight: 700;
           margin-bottom: 14px;
           span{
             background: red;
             font-size: 12px;
             display: inline-block;
             padding: 3px;
             margin-right: 8px;
           }
         }
         p:first-child{
           font-size: 14px;
         }
         p:last-child{
            font-size: 12px;
            margin-top: 12px;
            overflow: hidden;
            -webkit-text-overflow: emphasis;
            white-space: nowrap;
            span {
              background: #fff;
              display: inline-block;
              font-weight: 700;
              margin-right: 8px;
              color:red;
              padding: 2px;
            }

         }
         .alt{
           position: absolute;
           right: -25px;
           top: 55px;
           width: 45px;
           height: 25px;
           color: #dbdbdb;
           background-color:rgba(58, 58, 58, 0.6);
           border-radius: 20px;
           text-align: center;
           line-height: 25px;
           font-size: 12px;
         }
       }
   }
   
}
</style>