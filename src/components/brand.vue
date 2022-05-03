<template>
  <div>
    <ul>
      <li v-for="item in brandlist" :key="item.id">
        <img :src="item.pic_url" alt=""/>
        <h4>{{item.name}}</h4>
        <p>{{ item.floor_price | formatMoney }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "brand",
  props:["brandlist"]
}
</script>

<style lang="less" scoped>
  ul{
    display: flex;
    flex-wrap: wrap;
    li{
      width: 49%;
      position: relative;
      img{
        width: 100%;
      }
      h4{
        position: absolute;
        left: 20px;
        top:30px
      }
    }
  }
</style>