const Mock = require('mockjs');
import api from '../utils/api';

const mockFunc = (url: string): any => {
  let data: any = '';

  switch (url) {
    case api.getUserInfo:
      data = Mock.mock({
        userInfo: {
          id: '622200001111',
          'name|1': ['鲁大壮', '苏大强'], //名字为随机中文名字
          'avatar|1': [
            'https://pic1.zhimg.com/v2-fda399250493e674f2152c581490d6eb_1200x500.jpg',
            'https://www.kwongwah.com.my/wp-content/uploads/2016/12/161219ty01-323x400.jpg',
          ],
          calorie: 2332,
          level: 3,
          levelScore: 1200,
          nextLevel: 5000,
          'balance|+1': 322,
          'myOrder|+1': 3,
          'cardName|1': ['私教卡', '贵宾卡', '团课年卡'],
        },
      });
      break;
    case api.getOpenId: 
      data = Mock.mock({
        "OpenID": "afdsak21322432fdfsa32rqcsa3fa",
        "session_key": '23AS45MMffdsaffdsafas343',
      })
      break;
    case api.getBannerData: 
      data = Mock.mock([{imageName:"one",imageUrl:"./../../static/image/fish1.jpg"},
      {imageName:"two",imageUrl:"./../../static/image/fish2.jpg"},
      {imageName:"three",imageUrl:"./../../static/image/fish3.jpg"},
      {imageName:"four",imageUrl:"./../../static/image/fish4.jpg"}])
      break;
    case api.getCourses: 
      data = Mock.mock([{
        title: '哈他瑜伽',
        des: '给与身心的解放',
        money: '68.00',
    },{
        title: '流瑜伽',
        des: '给与身心的解放,这句话最多可以显示两行',
        money: '68.00',
    },{
        title: '骗他瑜伽',
        des: '给与身心的解放',
        money: '68.00',
    }])
      break;
    case api.getEntrance: 
      data = Mock.mock([
        {imageUrl: null,name:'本周推荐'},
        {imageUrl: null,name:'私教课程'},
        {imageUrl: null,name:'赠一得一'},
        {imageUrl: null,name:'购卡续费'},
        {imageUrl: null,name:'小团体课'},
        {imageUrl: null,name:'活力操课'},
        {imageUrl: null,name:'静安课程'},
        {imageUrl: null,name:'训练营'},])
      break;
    default:
      data = {};
  }
  let res: Global.IReturn = { code: 200, data, msg: 'ok' };
  return res;
};

export default mockFunc;
