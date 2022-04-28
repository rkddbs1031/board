import axios from 'axios';

const comment = {
  namespaced: true,
  state: {
    comments: [],
    commentSuccess: null,
  },
  getters: {},
  mutations: {
    setComments(state, payload) {
      state.comments = payload;
    },
    setSuccess(state, payload) {
      state.commentSuccess = payload;
    },
    resetComment(state) {
      state.commentSuccess = null;
    }
  },
  actions: {
    async getComment({ commit }, params = {}) {
      const { token, id } = params;
      const headers = {
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': token,
      };
      
      await axios.get(`${process.env.VUE_APP_API_URL}/api/posts/${id}/comments`, { headers })
        .then((res) => {
          commit('setComments', res.data.data);
        }).catch((err) => console.log(err.response.status));
    },
    async postComment({ commit }, params = {}) {
      const { token, id } = params;
      const headers = {
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': token,
      };
      const body = {
        content: params.content,
      };
      
      await axios.post(`${process.env.VUE_APP_API_URL}/api/posts/${id}/comments`, body, { headers })
        .then((res) => {
          commit('setSuccess', res.data.status);
        }).catch((err) => console.log(err.response.status));
    },
    async delComment({ commit }, params = {}) {
      const { token, id, commentId } = params;
      const headers = {
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': token,
      };
      
      await axios.delete(`${process.env.VUE_APP_API_URL}/api/posts/${id}/comments/${commentId}`, { headers })
        .then((res) => {
          commit('setSuccess', res.data.status);
        }).catch((err) => console.log(err.response.status));
    },
  },
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
export default comment;