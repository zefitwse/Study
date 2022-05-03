import Vue from "vue"
import VueRouter from "vue-router";
Vue.use(VueRouter);

import index from "../views/index"
import category from "../views/category"
import cart from "../views/cart"
import user from "../views/user"
import topic from "../views/topic"
import search from "@/views/search";
import detail from "@/views/detail";

const routes=[
    {path:'/',redirect:'/index'},
    {path:'/index',component:index,name:"index", meta:{isshowtabbar:true},
        children:[
            {path: 'search',component: search,name:"search", meta:{isshowtabbar:false}}
        ]
    },
    {path:'/topic',component:topic,name:"topic", meta:{isshowtabbar:true}},
    {path:'/category',component:category,name:"category", meta:{isshowtabbar:true}},
    {path:'/cart',component:cart,name:"cart", meta:{isshowtabbar:true}},
    {path:'/user',component:user,name:"user" ,meta:{isshowtabbar:true}},
    {path: "/detail", component:detail,name:"detail",meta:{isshowtabbar:false} }

]

const router=new VueRouter({
    mode:"history",
    routes
})

router.beforeEach((to ,from,next)=>{
    let  token=localStorage.getItem("token");
    if(to.path=='/cart'){
        if(token){
            next()
           }else {
            Vue.prototype.$toast({
                message:"请登录",
                duration:1000
            })
            setTimeout(() => {
                next('/user')
            }, 1000)
         }
    } else {
        next()
    }
})

export default router