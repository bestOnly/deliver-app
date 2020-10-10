<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const map: Map<string, string> = new Map();
import orderApi from "./apis/order";
@Component({
  components: {
  },
  computed: {
    a: () => 1,
  },
  methods: {
    async test() {
      const res = await orderApi.getGoodsList({
        method: "GET",
        url: "goods/goods_list",
      });
      console.log(res);
    },
  },
})
export default class App extends Vue {
  constructor() {
    super();
    this.map.set("1", "1");
    this.map.set("2", "2");
  }
  myText = "abc";
  map = map;
  created() {
    console.log("abc");
  }
}
</script>

<style>
</style>
