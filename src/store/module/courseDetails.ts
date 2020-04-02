import { MutationTree, ActionTree, Module } from 'vuex';
import { RootState } from './../roottypes';
//接口
export interface courseDetails {
        swiperList:[],
        entranceList:[],
        coursesList:[]
    }

export const courseDetails: Module<courseDetails,RootState> = {
    namespaced: true
}