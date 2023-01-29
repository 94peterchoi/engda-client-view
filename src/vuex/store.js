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

            console.log('페이로드 => ', payload);
            const {id, name, role} = payload;
            console.log('아디, 네임, 롤 => ', id, name, role);            

            state.user.isLoggedIn = true;
            state.user.id = id;
            state.user.userName = name;
            state.user.role = role;
        },
    },
    actions: {
        loginSuccess(context) {
            context.commit("loginSuccess");            
        },
    },
    getters: {
        getUser: (state) => state.user,
    },
});

export default store;