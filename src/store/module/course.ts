
import { RootState } from '../roottypes';
import { MutationTree, ActionTree, Module } from 'vuex';
import api from '../../utils/api';
import request from '../../utils/request';

export interface courseState{
    courselist: []
}

const state: courseState = {
    courselist: []
}

const mutations:MutationTree<courseState> = {
    setCourselist(state,list){
        state.courselist=list;
    }
}

const actions:ActionTree<courseState,RootState> = {
    async getCourselist({commit}){
        const { data } = await request.post(api.getCourselist,{});
        commit('setCourselist',data)
    }
}

export const course: Module<courseState,RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}
  