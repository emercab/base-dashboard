<template>
  <h1 class="text-2xl font-bold mb-2">Settings</h1>
  <p class="mb-8">
    Some settings content for the user to interact with.
  </p>

  <!-- Widgets Row 1 -->
  <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    <div class="flex justify-between items-center bg-white p-6 rounded shadow">
      <Icon name="settings" :color="theme.infoLight" :bgColor="theme.info" size="lg" shape="rounded" />
      
      <div class="">
        <h2 class="text-lg font-semibold">Widget 1</h2>
        <p>Random content for widget 1.</p>
      </div>
    </div>
    <div class="bg-white p-6 rounded shadow">
      <h2 class="text-lg font-semibold">Widget 2</h2>
      <p>Random content for widget 2.</p>
    </div>
    <div class="bg-white p-6 rounded shadow">
      <h2 class="text-lg font-semibold">Widget 3</h2>
      <p>Random content for widget 3.</p>
    </div>
  </section>

  <!-- Widgets Row 2 -->
  <section class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
    <div class="bg-white p-6 rounded shadow">
      <h2 class="text-lg font-semibold">Widget 4</h2>
      <p>Random content for widget 4.</p>
    </div>
    <div class="bg-white p-6 rounded shadow">
      <h2 class="text-lg font-semibold">Widget 5</h2>
      <p>Random content for widget 5.</p>
    </div>
    <div class="bg-white p-6 rounded shadow">
      <h2 class="text-lg font-semibold">Widget 6</h2>
      <p>Random content for widget 6.</p>
    </div>
    <div class="bg-white p-6 rounded shadow">
      <h2 class="text-lg font-semibold">Widget 7</h2>
      <p>Random content for widget 7.</p>
    </div>
  </section>

  <!-- Table -->
  <section class="bg-white p-6 rounded shadow mb-8">
    <h2 class="text-lg font-semibold mb-4">Data Table</h2>
    <table class="w-full text-left">
      <thead>
        <tr>
          <th class="border-b py-2">ID</th>
          <th class="border-b py-2">Name</th>
          <th class="border-b py-2">Email</th>
          <th class="border-b py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border-b py-2">1</td>
          <td class="border-b py-2">John Doe</td>
          <td class="border-b py-2">john@example.com</td>
          <td class="border-b py-2 space-x-2">
            <button class="text-blue-600">View</button>
            <button class="text-green-600">Edit</button>
            <button class="text-red-600">Delete</button>
          </td>
        </tr>
        <!-- Add more rows as needed -->
      </tbody>
    </table>
  </section>

  <!-- Form -->
  <section class="bg-white p-6 rounded shadow mb-8">
    <h2 class="text-lg font-semibold mb-4">Basic Form</h2>
    <form>
      <div class="mb-4">
        <label class="block text-gray-700">Text Input</label>
        <input type="text" class="border rounded py-2 px-4 w-full">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Textarea</label>
        <textarea class="border rounded py-2 px-4 w-full"></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Checkbox</label>
        <input type="checkbox" class="mr-2"> Checkbox Example
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Radio Buttons</label>
        <input type="radio" name="example" class="mr-2"> Option 1
        <input type="radio" name="example" class="mr-2"> Option 2
      </div>
      <button class="bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
    </form>
  </section>

</template>

<script setup>
  import { inject } from 'vue';

  import Icon from '../shared/Icon.vue';

  const { theme } = inject('theme');

</script>

<style scoped></style>