<template>
    <div>{{ fullName }}</div>
    <input type="number" v-model="newAge">
    <button @click="handleClick">Change Name</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

    interface Props {
        fullName: string;
        user: User
    }

    interface User {
        firstName: string,
        lastName: string,
        age: number,
    }
    const props = defineProps<Props>();

    const emit = defineEmits<{
        (event: "changeAge", age: number): void;
    }>();

    const newAge = ref(0);
    const handleClick = () => {
        // const newAge = props.user.age + 1;
        emit('changeAge', newAge.value);
    };
</script>