import axios from "axios";

const instance =axios.create({
    baseURL:"http://kumanxuan1.f3322.net:8001/",
    timeout:5000,
    headers:{'Content-Type':"application/json"},
});
//拦截器：可以拦截请求，给请求加上请求头，这样所有接口请求都不需要token了
instance.interceptors.request.use(function (config){
    let token=localStorage.getItem("token")
    if(token){
        config.headers['X-Nideshop-Token']=token
    }
    return config;
},function (error){
    return Promise.reject(error);
}),


instance.interceptors.request.use(function (response){
    return response
},function (error){return Promise.reject(error)})

export default instance