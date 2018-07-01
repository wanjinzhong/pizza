const state = {
    currentUser: null,
    isLogin: false
}

const getters = {
    getCurrentUser(state) {
        return state.currentUser;
    }
}

const mutations = {
    setCurrentUser(state, data) {
        state.currentUser = data;
               state.isLogin = data != null;
           },
           getIsLogin(state) {
            return state.isLogin;
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