/**
 * 根据需要将过滤器绑定全局中共用
 * */

import Vue from 'vue'

//引入工具类
import format from "./format";



// 实例化Vue的filter
Object.keys(format).forEach(k => Vue.filter(k, format[k]));
