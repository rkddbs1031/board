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
      await axios.post( `${process.env.VUE_APP_API_URL}/public/auth/login`, values, { headers })
        .then(( res ) => {
          commit( 'setUser', res.data.data.access_token );
        })
        .then(() => this.$router.push('/board/lists'))
        .catch(( err ) => console.log( err.response.status ));
    },
  },
};

export default user;