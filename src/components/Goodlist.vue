<template>
  <div class="goodlist">
    <li v-for="item in goodlist" :key="item.id" @click="godetail(item.id)">
      <img v-lazy="item.list_pic_url" alt=""/>
      <p>{{item.name}}</p>
      <p>{{item.retail_price|formatMoney}}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: "Goodlist",
  data(){
    return
  },
  props:["goodlist"],
  methods:{
    godetail(id){
      this.$router.push({path:"/detail",query:{id:id}})
    }
  }
}
</script>

<style  lang="less" scoped>
    .goodlist{
      display: flex;
      flex-wrap: wrap;
      il{
        width: 50%;
        img{
          width: 100%;
        }
      }
    }

</style>