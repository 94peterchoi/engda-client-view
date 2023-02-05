<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/login">Login</RouterLink> -->
        <RouterLink to="/editor">Editor테스트</RouterLink>    
        <button class="btn logout" @click="logout" v-if="user.isLoggedIn">logout</button>
        <button class="btn login" @click="login" v-else>login</button>
    </nav>
</template>

<script>
    import store from '@/vuex/store';

    export default {
        name: 'Header',
        data() {
            return {
                user: this.$store.getters.getUser,
            }
        },
        methods: {
            logout() {
                localStorage.removeItem('accessToken');
                store.commit('logoutSuccess');
                this.$router.push('/');
            },
            login() {                
                this.$router.push('/login');
            }
        }
    }    

</script>

<style scoped>
.btn.logout {
    background-color: yellow;
}

</style>
