<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/views/Header.vue';
import UserInfo from '@/views/UserInfo.vue';

</script>

<template>
  <header>
    <div class="wrapper">
      <Header></Header>
      <UserInfo></UserInfo>      
    </div>
  </header>

  <RouterView />
</template>
