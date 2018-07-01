const state = {
    currentUser: null,
    isLogin: false
}

const getters = {
    getCurrentUser(state) {
        return state.currentUser;
    },
  getIsLogin(state) {
    return state.isLogin;
  }
}

const mutations = {
    setCurrentUser(state, data) {
        state.currentUser = data;
               state.isLogin = data != null;
           }

}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}
