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
    case api.feedback:
      data = {};
      break;
    default:
      data = {};
  }
  let res: Global.IReturn = { code: 200, data, msg: 'ok' };
  return res;
};

export default mockFunc;
