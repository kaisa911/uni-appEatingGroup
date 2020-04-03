import { MutationTree, ActionTree, Module } from 'vuex';
import { RootState } from './../roottypes';
import request from '../../utils/request';
import api from '../../utils/api';
//接口
export interface courseDetails {
    curseInfo: object
}

//重新赋值
const state:courseDetails= {
   curseInfo: {}
}    

const mutations:MutationTree<courseDetails> = {
    setCurseInfo(state,info){
        state.curseInfo = info;
        console.log(state.curseInfo)
    }
    
}

const actions:ActionTree<courseDetails,RootState> = {
    async getCourseById({commit},parameter){
        const { data } = await request.post(api.getCourselist,{});
        let id = parameter.id;
        let curseInfoInfo = data.filter((item:any) => {
            console.log(77,item.id,id)
            item.id == id;
            return item;
        })[0];
        commit('setCurseInfo', curseInfoInfo);
    }
}

export const courseDetails: Module<courseDetails,RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}