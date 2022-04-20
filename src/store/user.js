import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

const user = {
  namespaced: true,
  state: {
    token: null,
  },
  getters: {
  },
  mutations: {
    setUser( state, payload ) {
      state.token = payload;
    },
    userLogout( state ) {
      console.log(state);
    }
  },
  actions: {
    async userLogin({ commit }, values ) {
      const API = `${process.env.VUE_APP_API_URL}/public/auth/login`;
      await axios.post( API, values)
        .then(( res ) => {
          commit( 'setUser', res.data.data.access_token );
        })
        .catch(( err ) => console.log( err ));
    },
  },
};

export default user;