import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import {fishLan} from './module/fishLan';
import {courseDetails} from './module/courseDetails';
import {course} from './module/course';
import { RootState } from './rootTypes';
 
Vue.use(Vuex);
 
const store: StoreOptions<RootState> = {
  modules: {
    fishLan,
    course,
    courseDetails
  },
  state: {
    nickname: '未设置',
  },
  mutations: {
    change(state, nickname) {
      state.nickname = nickname;
    }
  }
}
export default new Vuex.Store<RootState>(store)
