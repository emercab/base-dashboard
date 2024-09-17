<template>
  
  <Sidebar />

  <Header />

  <Main>
    <router-view />
  </Main>

  <Footer />

</template>

<script setup>
  import Header from '@/components/dashboard/Header.vue';
  import Footer from '@/components/shared/Footer.vue';
  import Main from '@/components/shared/Main.vue';
  import Sidebar from '@/components/dashboard/Sidebar.vue';
</script>
