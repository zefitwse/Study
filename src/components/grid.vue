<template>
  <van-grid :column-num="5">
    <van-grid-item :icon="item.icon_url" :text="item.name" v-for="item in channelArr" :key="item.id" />

  </van-grid>
</template>

<script>
export default {
  name: "grid",
  data(){
    return{};
  },
 props:["channelArr"],
}
</script>

<style scoped>

</style>