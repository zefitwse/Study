import instance from "./require"
//首页请求
export function getIndexData(params){
 return instance({
            method:'get',
            url:'/index/index',
            params:params
    })
}
//
export function getTopicData(params){
    return instance({
        method:'get',
        url:'/topic/list',
        params:params
    })
}
export function getCategoryData(params){
    return instance({
        method:'get',
        url:'/catalog/index',
        params:params
    })
}
export function getCurrentData(params){
    return instance({
        method:'get',
        url:'/catalog/current',
        params:params
    })
}


export function getCartListData(params){
    return instance({
        method:'get',
        url:'/cart/index',
        params:params
    })
}

//user页面
export function postLogin(params){
    return instance({
        method:'post',
        url:'/auth/loginByWeb',
        data:params
    })
}

export function getgoodlsit(params){
    return instance({
        method:'get',
        url:'/goods/list',
        params:params
    })
}

export function getgooddetail(params){
    return instance({
        method:'get',
        url:'/goods/related',
        params:params
    })
}