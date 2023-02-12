<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/views/Header.vue';
import UserInfo from '@/views/UserInfo.vue';
import SideNav from '@/views/SideNav.vue';

</script>

<template>
  <header>
    <div class="wrapper">
      <Header></Header>
      <UserInfo></UserInfo>      
    </div>
  </header>

  <div class="main">
    <SideNav></SideNav>
    <div class="content">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>

  header {
    position: fixed;
    width: 100%;
    z-index: 999;    
  }

  .main .content {
    padding: 10px;
    position: relative;
    top: 45px;
    margin-left: 200px;    
  }  

</style>
