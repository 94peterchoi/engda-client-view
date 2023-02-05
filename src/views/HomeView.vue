<template>
  <div v-if="user.isLoggedIn">
    <div>환영합니다 {{user.userName}}</div>
    <RouterLink to="/user/profile/form">프로필 작성을 진행해주세요</RouterLink>
  </div>
  <div v-else>
    여기 홈화면이니까 비로그인 사용자랑 로그인 사용자랑 똑같이 보여주는 게 맞을 듯
  </div>
</template>

<script>
  export default {
      name: 'HomeView',
      data() {
          return {
              user: this.$store.getters.getUser,
          }
      },
  }
</script>

