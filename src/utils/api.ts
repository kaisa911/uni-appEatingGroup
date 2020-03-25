export const DEBUG: boolean = true;
const prefix: string = `${DEBUG ? '' : 'http://uni-app-eating-group/'}`;
const api = {
  /* 获取个人中心页信息 */
  getUserInfo: `${prefix}/getUserInfo`,
  /* 反馈接口 */
  feedback: `${prefix}/feedback`,
  /* 获取修改个人信息页接口 */
  getEditInfo: `${prefix}/getEditInfo`,
  /* 提交个人信息修改 */
  submitEditInfo: `${prefix}/submitEditInfo`,
  /* 获取我的卡包的卡 */
  getMyCard: `${prefix}/getMyCard`,
};
export default api;
