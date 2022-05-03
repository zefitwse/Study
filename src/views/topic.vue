<template>
  <div class="page">

  <li v-for="item in dataArr" :key="item.id">
    <img v-lazy="item.scene_pic_url" alt=""/>
    <h4>{{item.title}}</h4>
    <p>{{ item.price_info | formatMoney }}</p>
  </li>
    <van-pagination v-model="page" :total-items=dataArr.length :items-per-page="5" @change="changepage"/>
  </div>
</template>

<script>
import {getTopicData} from "@/utils/http";

export default {
  name: "topic",
  data(){
    return{
      page:1,
      size:10,
      dataArr:[],
    }
  },
  methods:{
    getpage(){
      getTopicData({page:this.page , size:this.size}).then(res=>{
       this.dataArr=res.data.data.data
      })
    },
    changepage(){
      this.getpage()
    }
  },

  created() {
    this.getpage()
  }
}
</script>

<style lang="less" scoped>
div{
  padding-bottom: 100px;

}

</style>