import utils from './utils.js';

//请求接口函数
const request = (method: any, url: string, data: any, loading: boolean) => {
  return new Promise((resolve, reject) => {
    //显示加载动画
    if (loading) utils.showLoading();

    // 获取token
    // let token = wx.getStorageSync('token');

    // let obj = { token };

    // 添加token
    // Object.assign(data, obj);

    //发起请求
    uni.request({
      url,
      method,
      data,
      header: {
        // 数据被编码为名称/值对
        //"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
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
  get: function(url: string, params: any, loading: boolean) {
    return request('GET', url, params, loading);
  },
  post: function(url: string, params: any, loading: boolean) {
    return request('POST', url, params, loading);
  },
};
