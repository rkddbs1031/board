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
    },
    async postBaord({ commit }, params = {}) {
      const { token, body } = params;
      const headers = {
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': token,
      };
      
      await axios.post( `${process.env.VUE_APP_API_URL}/api/posts`, body, { headers })
        .then(() => {
          alert('게시글이 작성되었습니다.');
          this.$router.push('/board/lists');
        })
        .catch((err) => console.log(err));
    },
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