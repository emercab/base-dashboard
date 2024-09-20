<template>
  <h1 class="text-2xl font-bold mb-2" :style="{ color: theme.primary }">Dashboard Title</h1>
  <p class="mb-8">
    This is a description of the dashboard. It can include instructions, summaries, or any other
    information.
  </p>

  <div class="flex items-end gap-3 mb-8">
    <Icon name="instagram" :color="theme.danger" :bgColor="theme.warning" size="xs" shape="rounded" />
    <Icon name="instagram" :color="theme.danger" :bgColor="theme.warning" size="sm" shape="rounded" />
    <Icon name="instagram" :color="theme.danger" :bgColor="theme.warning" size="md" shape="rounded" />
    <Icon name="instagram" :color="theme.danger" :bgColor="theme.warning" size="lg" shape="rounded" />
    <Icon name="instagram" :color="theme.danger" :bgColor="theme.warning" size="xl" shape="rounded" />
    <Icon name="instagram" :color="theme.danger" :bgColor="theme.warning" size="2xl" shape="rounded" />
    <Badge text="Aprobado" />
    <Badge text="Aprobado" color="secondary" iconName="videoCamera" />
    <Badge text="Aprobado" color="success" iconName="arrowTrendingUp"/>
    <Badge text="Danger" color="danger" iconName="xMark" />
    <Badge text="Warning" color="warning" />
    <Badge text="Aprobado" color="info" />
    <Badge text="Aprobado" color="#8b4513" />
  </div>

  <div class="flex items-end gap-3 mb-8">
    <span v-for="color in lightPalette" :style="{ backgroundColor: color }" class="p-3 rounded">
      {{ color }}
    </span>
  </div>

  <div class="flex items-end gap-3 mb-8">
    <span v-for="color in darkPalette" :style="{ backgroundColor: color }" class="p-3 rounded">
      {{ color }}
    </span>
  </div>

  <!-- Widgets Row 1 -->
  <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    <Widget title="Widget 1" content="Random content for widget 1." />
    <Widget title="Widget 2" content="Random content for widget 2." />
    <Widget title="Widget 3" content="Random content for widget 3." />
  </section>

  <!-- Widgets Row 2 -->
  <section class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
    <Widget title="Widget 4" content="Random content for widget 4." />
    <Widget title="Widget 5" content="Random content for widget 5." />
    <Widget title="Widget 6" content="Random content for widget 6." />
    <Widget title="Widget 7" content="Random content for widget 7." />
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

  import Badge from '../shared/Badge.vue';
  import Icon from '../shared/Icon.vue';
  import Widget from '../shared/Widget.vue';
  import { createPalette } from '@/utils/manageColors';

  const { theme } = inject('theme');

  // Ejemplo de uso
  const randomColor = theme.value.primary; // Color original

  // Generar paleta del color hacia blanco
  const lightPalette = createPalette(randomColor);
  console.log('Light Palette:', lightPalette);

  // Generar paleta del color hacia negro
  const darkPalette = createPalette(randomColor, 'dark');
  console.log('Dark Palette:', darkPalette);

</script>

<style scoped></style>