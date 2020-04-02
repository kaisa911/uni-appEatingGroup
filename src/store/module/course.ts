
import { RootState } from '../roottypes';
import { MutationTree, ActionTree, Module } from 'vuex';

export interface courseState{
    courselist: object
}

const state: courseState = {
    courselist: [{
        title: '哈他瑜伽',
        des: '给与身心的解放',
        money: '68.00',
        imageUrl: './../../static/image/exercise8.jpg',
        personNum: 8,
        tiem: '12-15 10.00-10.45',
        pro: ['塑性','拉伸','小团体课'],
        status: 0
    },{
        title: '流瑜伽',
        des: '给与身心的解放,这句话最多可以显示两行',
        money: '68.00',
        imageUrl: './../../static/image/exercise7.jpg',
        personNum: 8,
        tiem: '12-15 10.00-10.45',
        pro: ['塑性','拉伸','小团体课'],
        status: 1
    },{
        title: '骗他瑜伽',
        des: '给与身心的解放',
        money: '68.00',
        imageUrl: './../../static/image/exercise2.jpg',
        personNum: 8,
        tiem: '12-15 10.00-10.45',
        pro: ['塑性','拉伸','小团体课'],
        status: 2
    }]
}

const mutations:MutationTree<courseState> = {
}

const actions:ActionTree<courseState,RootState> = {
}

export const course: Module<courseState,RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}
  