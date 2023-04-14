import axios from 'axios'
import { ElMessage } from 'element-plus'
import { router } from '../router'
import {getCookies,remove} from './tokenCookie'

const service=axios.create({
    // baseURL:import.meta.env.VITE_API_URL,
    // baseURL:'https://dbyxs.xyz:8002',
    timeout:5000,
    // headers:{'Content-Type':'application/json'}
})
service.interceptors.request.use((config)=>{
    if(getCookies()){
        // config.headers.common['Authorization']=`${getCookies()}`
    }
    return config
},(err)=>{
    return Promise.reject(err)
})
service.interceptors.response.use((response)=>{
    let res=response.data
    if(res.code&&res.code!==0){
        if(res.code===401){
            ElMessage.error('用户登录失败，请重新登录')
            remove()
            router.push('/')
        }
        return Promise.reject(service.interceptors.response)
    }else{
        return response.data
    }
},(err)=>{
    ElMessage.error('连接超时')
    return Promise.reject(err)
})
export default service