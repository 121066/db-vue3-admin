import Cookies from 'js-cookie'
import {Config} from '../setting.js'
let tokenKey=Config.tokenKey

//获取token
export function getCookies(val){
  return Cookies.get(val||tokenKey)
}
//移除Token
export function remove(){
  return Cookies.remove(tokenKey)
}
//设置token
export function setCookies(val){
  return Cookies.set(tokenKey,val)
}