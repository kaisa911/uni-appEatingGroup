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
      data = Mock.mock([{imageName:"one",imageUrl:"./../../static/image/exercise13.jpg"},
      {imageName:"two",imageUrl:"./../../static/image/exercise5.jpg"},
      {imageName:"three",imageUrl:"./../../static/image/exercise4.jpg"},
      {imageName:"four",imageUrl:"./../../static/image/exercise12.jpg"}])
      break;
    case api.getCourses: 
      data = Mock.mock([{
        title: '哈他瑜伽',
        des: '给与身心的解放',
        money: '68.00',
        imageUrl: './../../static/image/exercise8.jpg',
    },{
        title: '流瑜伽',
        des: '给与身心的解放,这句话最多可以显示两行',
        money: '68.00',
        imageUrl: './../../static/image/exercise7.jpg',
    },{
        title: '骗他瑜伽',
        des: '给与身心的解放',
        money: '68.00',
        imageUrl: './../../static/image/exercise2.jpg',
    }])
      break;
    case api.getEntrance: 
      data = Mock.mock([
        {imageUrl: './../../static/image/exercise8.jpg',name:'本周推荐'},
        {imageUrl: './../../static/image/exercise2.jpg',name:'私教课程'},
        {imageUrl: './../../static/image/exercise3.jpg',name:'赠一得一'},
        {imageUrl: './../../static/image/exercise4.jpg',name:'购卡续费'},
        {imageUrl: './../../static/image/exercise5.jpg',name:'小团体课'},
        {imageUrl: './../../static/image/exercise6.jpg',name:'活力操课'},
        {imageUrl: './../../static/image/exercise13.jpg',name:'静安课程'},
        {imageUrl: './../../static/image/exercise8.jpg',name:'训练营'},])
      break;
    default:
      data = {};
  }
  let res: Global.IReturn = { code: 200, data, msg: 'ok' };
  return res;
};

export default mockFunc;
