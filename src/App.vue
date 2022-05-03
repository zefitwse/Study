<template>
  <div id="app">
    <tabbar v-show="$route.meta.isshowtabbar"></tabbar>
    <!--   一级路由-->
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar";

export default {
  name: 'App',
  components: {
   tabbar,
  },
  methods:{

  },
  data(){
    return {active:0}
  },
  created() {

  }
}
</script>

<style lang="less">
#app {
}
</style>
