<template>
  <div>
    <form action="/">
      <van-search
          v-model="keyword"
          show-action
          placeholder="请输入搜索关键词"
          @search="onsearch"
          @cancel="$router.back()"
      />
    </form>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" disabled title="全部" />
      <van-dropdown-item v-model="value2" :options="filterCategory" title="价格" @change="price"/>
      <van-dropdown-item v-model="value3" :options="option3" title="分类"  @change="kind"/>
    </van-dropdown-menu>
    <Goodlist :goodlist="goodlist"></Goodlist>
  </div>
</template>

<script>
import {getgoodlsit} from "@/utils/http";
import Goodlist from "@/components/Goodlist";

export default {
  name: "search",
  components: {
    Goodlist,
  },
  data(){
    return{
      keyword:"",
      page:1,
      size:5,
      order:"desc",
      categoryId:"0",
      sort:"id",
      goodlist:[],
      filterCategory:[],
      // --
      value1: 0,
      value2: 'desc',
      value3: "A",
      option1: [
        { text: '由高到低', value: "desc" },
        { text: '由低到高', value: "asc" },

      ],

      option3: [
        { text: '默认排序', value: 'A' },
        { text: '好评排序', value: 'B' },
        { text: '销量排序', value: 'C' },
      ],
    }
  },
  methods:{
    onsearch(){
      this.getData()
    },
    getData() {
      let obj={
        keyword:this.keyword,
        page:this.page,
        size:this.size,
        order:this.order,
        categoryId:this.categoryId,
        sort:this.sort
      }
      getgoodlsit({obj}).then(res=>{
        let{goodlist,filterCategory}=res.data.data
        this.goodlist=goodlist
        this.filterCategory=filterCategory
        let str=JSON.stringify(this.filterCategory)
        this.filterCategory=JSON.parse(str.replace(/name/g,"text").replace(/id/g,"value"))
      })

    },
    price(value){
        this.order=value;
        this.sort="price";
        this.getData()
    },
    kind(value){
      this.categoryId=value;
      this.sort="id";
      this.getData()
    }

  },
  created() {
    this.getData()
  }

}
</script>

<style lang="less" scoped>

</style>