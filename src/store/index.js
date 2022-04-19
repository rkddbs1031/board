import Vue from "vue";
import Vuex from "vuex";
import list from './list';
import user from './user';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    list,
    user,
  },
  // plugins: [
  //   createPersostedState({
  //     paths: [
        // 'list',
        // 'user',
  //     ],
  //   }),
  // ],
});
