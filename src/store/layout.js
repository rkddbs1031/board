const layout = {
  namespaced: true,
  state: {
    Sidebar_drawer: null,
    breadcrumbs: {
      title: '',
      text: [],
    },
  },
  getters: {
  },
  mutations: {
    SET_SIDEBAR_DRAWER( state, payload ) {
      state.Sidebar_drawer = payload;
    },
    SET_BREADCRUMBS( state, payload ) {
      state.breadcrumbs.title = payload.title;
      state.breadcrumbs.text = payload.text;
    },
    CLEAR_BREADCRUMBS( state ) {
      state.breadcrumbs.title = '';
      state.breadcrumbs.text = [];
    },
  },
  actions: {},
};


export default layout;
