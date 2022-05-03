<template>
  <div class="user">
    <div class="user_top">
      <img :src="headImg" alt="">
      <h3 v-if="islogined">{{username}}</h3>
      <h3 v-else @click="loginfn">点击登录</h3>
      <van-icon :name="islogined?'cross':'arrow'" @click="out" ></van-icon>
    </div>

    <div v-show="ismodel" class="modal">
      <div class="modal_bg" @click="ismodel=false"></div>
      <div class="modal_content">
        <van-form @submit="onSubmit">
          <van-field
              v-model="username"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>
      </div>

    </div>
  </div>
</template>

<script>
import {postLogin} from "@/utils/http";

export default {
  name: "user",
  data(){
    return{
      islogined:false,
      username:'',
      password:'',
      ismodel:false,
      headImg: require("../assets/logo.png"),
    }
  },
  created() {
    let userinfo=localStorage.getItem("userInfo")
    if(userinfo){
      this.username=JSON.parse(userinfo).username;
      this.headImg=JSON.parse(userinfo).avatar;
      this.islogined=true
    }
  },
  methods:{
    onSubmit(val){
      postLogin({username:val["用户名"],pwd:val["密码"]}).then(res=>{
        console.log(res)
        let{token,userInfo}=res.data.data
        localStorage.setItem("token",token)
        localStorage.setItem("userInfo",JSON.stringify(userInfo))
        this.ismodel=false;
        this.islogined=true;
        this.username=userInfo.username;
        this.headImg=userInfo.avatar;
      })
    },
    loginfn(){
      this.ismodel=true
    },
    out(){
      this.$dialog.confirm({
        message:"退出？"
      })
      .then(()=> {
        this.islogined = false;
        localStorage.removeItem("userInfo")
        localStorage.removeItem("token")
       this.$router.go(0);

      })
    }
  }
}
</script>

<style lang="less" scoped>
.user{
.user_top{
  display: flex;
  font-size:14px ;
  background: #000;
  color: white;
  padding: 20px 10px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  img{
    border-radius: 50%;
    margin-right: 10px;
    width: 60px;
    height: 60px;
  }
  h3{
    flex: 1;

  }
}
  .modal{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 99;
    left: 0;
    top:0;
    .modal_bg{
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
    }
    .modal_content{
      width: 90%;
      height: 200px;
      position: absolute;
      background: #fff;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      padding-top: 40px;
    }
  }
}

</style>