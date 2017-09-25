/**
 * Created by hs on 17/9/5.
 */
import axios from 'axios'
import api from './api'
var qs = require('qs')
axios.defaults.withCredentials = true

export const checkCodeUrl = config.checkCode
export const getNewsList = params => {
  return axios.get(config.getNewsList, {params: params});
}

export const Detail = r => require.ensure([], () => r(require('../page/course/Detail.vue')))

function createPostParams(obj) {
  return qs.stringify(obj);
}
