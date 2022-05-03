<template>
 <div>
   <van-tabbar v-model="active" :route="true" @change="onchange">
     <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
     <van-tabbar-item icon="search" to="/topic">专题</van-tabbar-item>
     <van-tabbar-item icon="friends-o" to="/category">分类</van-tabbar-item>
     <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
     <van-tabbar-item icon="setting-o" to="/user">我的</van-tabbar-item>
   </van-tabbar>
 </div>
</template>

<script>
export default {
  name: "tabbar",
  methods:{
    onchange(active){
      console.log(active)
    }
  },
  data(){
    return {active:0}
  }

}
</script>

<style scoped>

</style>