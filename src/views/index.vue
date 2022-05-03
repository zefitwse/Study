<template>
  <div class="home">
    <router-view v-if="$route.path=='/index/search'"></router-view>
  <div v-else>
    <van-search v-model="value" placeholder="搜索" shape="round" @click="$router.push('/index/search')"></van-search>
    <Swiper :bannerArr="bannerArr"></Swiper>
    <grid :channelArr="channelArr"></grid>
    <!--    品牌职工-->
    <Brand :brandlist="brandlist"></Brand>
  </div>

  </div>
</template>

<script>

import Swiper from "@/components/swiper";
import {getIndexData} from "@/utils/http";
import grid from "@/components/grid";
import Brand from "@/components/brand";

export default {
  name: "index",
  components: {
    Brand,
    Swiper,
    grid,
  },
  data(){
    return{
      value:"",//搜索框的内容,
      bannerArr:[],
      channelArr:[],
      brandlist:[],

    }
  },
  methods:{
    page(){

    }
  },
  created() {
    getIndexData().then(res=>{
      console.log(res)

      let{banner,channel,brandList}=res.data.data;
      this.bannerArr=banner;
      this.channelArr=channel;
      this.brandlist=brandList;
    })

  }
}
</script>

<style scoped>

</style>