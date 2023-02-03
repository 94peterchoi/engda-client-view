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
header {
    line-height: 1.5;
    max-height: 100vh;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}


.btn.logout {
    background-color: yellow;
}

</style>
