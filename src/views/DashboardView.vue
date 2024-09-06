<template>
  <Sidebar />
  
  <Header />

  <main class="pt-20 lg:ml-64 p-4" :style="{ backgroundColor: theme.bg1, color: theme.text }">
    <RouterView />
  </main>

  <Footer />

</template>

<script setup>
  import { inject } from 'vue';

  import Sidebar from '@/components/dashboard/Sidebar.vue';
  import Header from '@/components/dashboard/Header.vue';
  import Footer from '@/components/dashboard/Footer.vue';

  const { theme } = inject('theme');
</script>
