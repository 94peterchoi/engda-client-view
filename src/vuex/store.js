import Vuex from "vuex";

const store = new Vuex.Store({
    state: {
        user: {
            isLoggedIn: false,
            id: '',
            userName: '',
            role: '',        
        }
    },
    mutations: {
        loginSuccess(state, payload) {
            const {id, name, role} = payload;

            state.user.isLoggedIn = true;
            state.user.id = id;
            state.user.userName = name;
            state.user.role = role;
        },
        logoutSuccess(state) {
            state.user.isLoggedIn = false;
            state.user.id = '';
            state.user.userName = '';
            state.user.role = '';
        }
    },
    actions: {
        loginSuccess(context) {
            context.commit("loginSuccess");            
        },
        logoutSuccess(context) {
            context.commit('logoutSuccess');
        }
    },
    getters: {
        getUser: (state) => state.user,
    },
});

export default store;