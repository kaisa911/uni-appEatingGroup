import request from '../../utils/request';
import api from '../../utils/api';
export default {
    namespaced: true,
    state: {
        swiperList: [],
        entranceList: [],
        coursesList: []
    },
    getters: {},
    mutations: {
        setSwiperItem(state: any,swiperData: string){
           state.swiperList = swiperData;
        },
        setEntranceList(state: any , list: string){
            state.entranceList = list;
        },
        setcoursesList(state:any, courses:string){
            state.coursesList = courses;
        }
    },
    actions: {
        async setOpenId(context:any){
            const {data } = await request.post(api.getOpenId,{});
            uni.setStorage({
                key: 'OpenID ',
                data: data.OpenID,				
            });
            uni.setStorage({
                key: 'session_key ',
                data: data.session_key,				
            });
        },
        async getBannerData(context:any){
            const {data } = await request.post(api.getBannerData,{});
            context.commit('setSwiperItem', data);
        },
        async getCourses(context:any){
            const {data } = await request.post(api.getCourses,{});
            context.commit('setcoursesList', data);
        },
        async getEntranceData(context:any){
            const data = await request.post(api.getEntrance,{});
            return data;
        }
    }
}