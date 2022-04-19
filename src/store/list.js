import axios from 'axios';

const list = {
  namespaced: true,
  state: {
    items: [],
    size: 0,
    totalPage: 0,
    totalSize: 0,
    currentPage: 1,
  },
  getters: {},
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    async getBoard({ commit }, params = {}) {
      const { token } = params;
      // const query = makeQuery( params );
      const headers = {
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': token,
      };
      
      await axios.get(`${process.env.VUE_APP_API_URL}/api/posts`, { headers })
        .then((res) => {
          commit('setItems', res.data.data);
        }).catch((err) => console.log(err.response.status));
    }
  }
};

function makeQuery(params) {
  const keyArr = Object.keys(params);
  let query = '';
  keyArr.forEach((e, i) => {
    if (i) query += '&';
    query += `${e}=${params[e]}`;
  });
  return query;
}
export default list;