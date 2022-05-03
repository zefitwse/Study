<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词"/>
    <div class="container">
      <div class="left">
        <van-sidebar v-model="activeKey"  @change="onChange">
          <van-sidebar-item :title="item.name" v-for="item in categoryListArr" :key="item.id"></van-sidebar-item>
        </van-sidebar>
      </div>
      <div class="right">
        <img class="pic" :src="currentCategory.banner_url" alt=""/>
        <h4>{{currentCategory.name}}</h4>
        <van-grid :column-num="3">
          <van-grid-item :icon="item.banner_url" :text="item.name" v-for="item in currentCategory.subCategoryList" :key="item.id" />

        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import {getCategoryData} from "@/utils/http";
import {getCurrentData} from "@/utils/http";

export default {
  name: "category",
  data() {
    return {
      value: '',
      activeKey: 0,
      categoryListArr:[],
      currentCategory:{},
    }
  },
  created() {
    getCategoryData().then(res=>{
      let {categoryList,currentCategory}=res.data.data;
      this.categoryListArr=categoryList;
      this.currentCategory=currentCategory;

    })
  },
  methods:{
    onChange(index){
      this.activeKey=index;
      let id= this.categoryListArr[index].id;
      getCurrentData({id}).then(res=>{
        this.currentCategory=res.data.data.currentCategory
      })
    }

  }
}
</script>

<style  lang="less" scoped>
 .container{
   display: flex;
   .right{
     flex: 1;
     .pic{
       width: 100%;
       height: 140px;
     }
     h4{
       display: flex;
       justify-content: center;
     }
   }
 }
</style>