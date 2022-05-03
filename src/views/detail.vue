<template>
  <swiper :bannerArr="swiperArr"></swiper>
</template>

<script>
import {getgooddetail} from "@/utils/http";
import swiper from "@/components/swiper";

export default {
  name: "detail",
  components:{
    swiper,
  },
  data(){
    return{
        swiperArr:[]
    }
  },
  created() {
    getgooddetail({id:this.$route.query.id}).then(res=>{
      let {galley}=res.data.data;
      this.swiperArr=galley;
      this.swiperArr.map((item)=>{
        return (item.image_url=item.img_url)
      })
    })
  },
  methods:{

  }

}
</script>

<style lang="less" scoped>


</style>