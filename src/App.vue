<template>
  <div id="app">
    <!-- 头部组件 -->
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppHeader from './components/Appheader.vue'
@Component({
  components: {
    AppHeader
  },
  computed: {
  },
  methods: {}
})
export default class App extends Vue {
}
</script>

<style lang="less" scoped>


</style>
