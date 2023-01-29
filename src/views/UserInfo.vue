<template>
    
    <div v-if="user.isLoggedIn">
        환영합니다 로그인한 자여
    </div>   
    <div v-else>
        비로그인 사용자
    </div>
    
</template>

<script>

    export default {
        data() {
            return {
                user: this.$store.getters.getUser,
            }
        },
        created: function() {
            console.log(this.$store.state.user.isLoggedIn);
        }
    }
</script>


