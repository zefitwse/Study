<template>
  <div>
    <van-swipe class="my-swipe"  indicator-color="white">
      <van-swipe-item v-for="item in bannerArr" :key="item.id">
        <img :src="item.image_url"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "swiper",
  props:["bannerArr"]
}
0
</script>

<style lang="less" scoped>

.my-swipe .van-swipe-item{

  color: #fff;
  font-size: 20px;
  text-align: center;

  img{
    border-radius: 5px;
  box-shadow: #807c7c 1px 1px 5px 1px;
    display: inline-block;
    width: 100%
  }
}
</style>