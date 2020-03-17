import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    nickname: '未设置',
  },
  mutations: {
    change: function(state: Global.IState, nickname: string): void {
      state.nickname = nickname;
    },
  },
});
export default store;
