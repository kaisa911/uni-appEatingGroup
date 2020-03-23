import utils from './utils';
import { DEBUG } from './api';
import mockFunc from '../mock/index';

//请求接口函数
const request = (method: any, url: string, data: any, loading?: boolean) => {
  return new Promise((resolve, reject) => {
    //显示加载动画
    if (loading) utils.showLoading();

    // 获取token
    // let token = wx.getStorageSync('token');

    // let obj = { token };

    // 添加token
    // Object.assign(data, obj);

    if (DEBUG) {
      resolve(mockFunc(url));
      if (loading) utils.hideLoading();
      return;
    }
    //发起请求
    uni.request({
      url,
      method,
      data,
      header: {
        // 数据被编码为名称/值对
        'content-type': method === 'POST' ? 'application/json' : 'application/x-www-form-urlencoded',
      },
      success: res => {
        resolve(res.data);
      },
      fail: err => {
        reject(err);
      },
      complete: () => {
        //结束加载动画
        if (loading) utils.hideLoading();
      },
    });
  });
};

export default {
  get: function(url: string, params: any, loading?: boolean): any {
    return request('GET', url, params, loading);
  },
  post: function(url: string, params: any, loading?: boolean): any {
    return request('POST', url, params, loading);
  },
};
