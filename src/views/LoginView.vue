<script setup>
  import googleLogo from '@/assets/image/google-logo.png';
  import facebookLogo from '@/assets/image/facebook-logo.png';
  import githubLogo from '@/assets/image/github-logo.png';
  import {GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN} from '@/constants/loginInfo';

</script>

<template>
  <div class="login">
    <h1>This is a login page</h1>
    <div>
      <a :href="GOOGLE_AUTH_URL">
        <img :src=googleLogo alt="Google" />
        구글아이디로 로그인
      </a>
    </div>

  </div>
</template>
