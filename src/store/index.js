import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';
import board from './board';
import user from './user';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    board,
    user,
  },
  plugins: [
    createPersistedState({
      paths: [ 'user'],
    }),
  ],
});
