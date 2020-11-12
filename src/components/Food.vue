<template>
  <div class="box" @click="showOrHide">
     <div class="goodMain"></div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    props: {
      food: Object
    },
    methods: {
       showOrHide() {
          this.isShowBox = !this.isShowBox
       }
    }
  })
  export default class  extends Vue {
    isShowBox: false
  }
</script>

<style scoped>
.box{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  position: absolute;
  left: 0;
  top: 0;
}
.goodMain{
  width: 80%;
  height: 60%;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>