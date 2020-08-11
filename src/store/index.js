import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      nickName: "游客",
      phone: "400-123456",
    },
  },
  getters: {
    nickName: (state) => {
      return state.userInfo.nickName;
    },
    phone: (state) => {
      return state.userInfo.phone;
    },
  },
  mutations: {
    // mutation 必须同步执行
    set_userInfo(state, payload) {
      state.userInfo = payload;
    },
    set_userInfo_nickName(state, payload) {
      state.userInfo.nickName = payload;
    },
    set_userInfo_phone(state, payload) {
      state.userInfo.phone = payload;
    },
  },
  actions: {
    // action 可以通过 store.dispatch 方法触发
    // action 内部可以执行异步操作
    set_userInfo({ dispatch, commit }, payload) {
      commit("set_userInfo", payload);
    },
    set_userInfo_nickName({ dispatch, commit }) {
      commit("set_userInfo_nickName");
    },
    async set_userInfo_phone({ dispatch, commit }) {
      // await dispatch("set_userInfo"); 可以异步操作
      // dispatch('set_userInfo') // 等待 action => set_userInfo 完成
      commit("set_userInfo_phone");
    },
  },
  modules: {},
});
