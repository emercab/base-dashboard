<template>
  <Header />
  <Sidebar />


  <main class="pt-20 lg:ml-64 p-4">
    <RouterView />
  </main>

  <Footer />

</template>

<script setup>
  import Sidebar from '@/components/dashboard/Sidebar.vue';
  import Header from '@/components/dashboard/Header.vue';
  import Footer from '@/components/dashboard/Footer.vue';
</script>
