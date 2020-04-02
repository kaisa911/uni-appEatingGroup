import { MutationTree, ActionTree, Module } from 'vuex';
import request from '../../utils/request';
import api from '../../utils/api';
import { RootState } from './../roottypes';

//接口
export interface fishLanState {
    swiperList:[],
    entranceList:[],
    coursesList:[]
}
     
//重新赋值
const state: fishLanState = {
    swiperList: [],
    entranceList: [],
    coursesList: []
}
    

const mutations:MutationTree<fishLanState> = {
    setSwiperItem(state,swiperData){
        state.swiperList = swiperData;
     },
     setEntranceList(state, list){
         state.entranceList = list;
     },
     setcoursesList(state, courses){
         state.coursesList = courses;
     }
}

const actions:ActionTree<fishLanState,RootState> ={
    async setOpenId(){
        const {data } = await request.post(api.getOpenId,{});
        uni.setStorage({
            key: 'OpenID ',
            data: data.OpenID,              
        });
        uni.setStorage({
            key: 'session_key ',
            data: data.session_key,             
        });
    },
    
    async getBannerData({commit}){
        const {data } = await request.post(api.getBannerData,{});
        commit('setSwiperItem', data);
    },
    
    async getCourses({commit}){
        const {data } = await request.post(api.getCourses,{});
        commit('setcoursesList', data);
    },
    
    async getEntranceData(){
        const data = await request.post(api.getEntrance,{});
        return data;
    }
}

export const fishLan: Module<fishLanState,RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}