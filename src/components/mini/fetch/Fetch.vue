<script setup lang="ts">
  import { ref } from 'vue';
  import { User } from '../../../types/users';
  const users = ref<User[]>([]);

  const fetchUsers = async () : Promise<void> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    users.value = await res.json();
  };

  fetchUsers();
</script>

<template>
  <div v-for="user in users" :key="user.id">{{ user.name }}</div>
</template>