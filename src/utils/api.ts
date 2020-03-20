export const DEBUG: boolean = true;
const prefix: string = `${DEBUG ? '' : 'http://uni-app-eating-group/'}`;
const api = {
  getUserInfo: `${prefix}/getUserInfo`,
  feedback: `${prefix}/feedback`,
};
export default api;
