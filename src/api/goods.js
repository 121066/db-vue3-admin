import axios from '../util/request'
const api='/goods'
//商品列表
export function getGoodsList(type){
    // return axios({
    //     url:`/goods`,
    //     // url:'https://dbyxs.xyz:8002/goods',
    //     method:'post'
    // })
    return axios.post(`${api}/goods`)
}