import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';
import layout from './layout';
import board from './board';
import user from './user';
import comment from './comment';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    layout,
    board,
    user,
    comment,
  },
  plugins: [
    createPersistedState({
      paths: [ 'user', 'layout', 'board', 'comment'],
    }),
  ],
});
