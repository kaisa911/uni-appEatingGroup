export const DEBUG: boolean = true;
const prefix: string = `${DEBUG ? '' : 'http://uni-app-eating-group/'}`;
const api = {
  getUserInfo: `${prefix}/getUserInfo`,
  getOpenId: `${prefix}/getOpenId`,
  getBannerData: `${prefix}/getBannerData`,
  getCourses: `${prefix}/getCourses`,
  getEntrance: `${prefix}/getEntrance`,
};
export default api;
