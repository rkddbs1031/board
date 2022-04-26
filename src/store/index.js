import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';
import layout from './layout';
import board from './board';
import user from './user';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    layout,
    board,
    user,
  },
  plugins: [
    createPersistedState({
      paths: [ 'user', 'layout' ],
    }),
  ],
});
