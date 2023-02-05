<template>
  <div>환영합니다 {{user.userName}}</div>
  <RouterLink to="/user/profile/form">프로필 작성을 진행해주세요</RouterLink>
</template>

<script>
  export default {
      name: 'HomeView',
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

