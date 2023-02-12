<template>    
    <div v-if="user.isLoggedIn">
        <!-- <div>{{user.userName}}</div> -->
    </div>   
    <div v-else>
        <!-- 비로그인 사용자 -->
    </div>  
</template>

<script>

    export default {
        name: 'UserInfo',
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


