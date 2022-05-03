<template>
    <div class="cart">
      <van-checkbox-group v-model="result" >
        <van-checkbox :name="item" v-for="item in cartListArr" :key="item.id" @click="checkOne">
          <van-card
            :num="item.number"
            :price="item.retail_price"
            :title="item.goods_name"
            :thumb="item.list_pic_url"
        />
        </van-checkbox>

      </van-checkbox-group>
      <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="check" @click="checkAll">全选</van-checkbox>
        <template #tip>
          你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
        </template>
      </van-submit-bar>
    </div>
</template>

<script>
import {getCartListData} from "@/utils/http";

export default {
  name: "cart",
  data(){
    return{
      result: [],
      cartListArr:[],
      check:false,
    }
  },
  created() {
    getCartListData().then(res=>{
        console.log(res)
      let {cartList}=res.data.data
      this.cartListArr=cartList
      })
  },
  computed : {
    total() {
      let money=0;
      this.result.forEach(item=>{
        money+=item.retail_price*item.number
      })
      return money*100
    }
  },
  methods:{
    onSubmit() {

    },
    onClickEditAddress(){

    },
    checkAll(){
        if(this.check){
        this.result=this.cartListArr
    }else{
      this.result=[]
    }
  },
    checkOne(){
      console.log(this.result.length)
      if(this.result.length==this.cartListArr.length){
        this.check=true
      }else{
        this.check=false
      }
    },

  }
}
</script>

<style lang="less" scoped>
 /deep/.van-checkbox__label{
   flex: 1;
 }
 .van-submit-bar{
   bottom: 50px;
 }
</style>