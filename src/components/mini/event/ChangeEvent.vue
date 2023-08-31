<template>
    <div>change</div>
    <input @change="handleChange($event, 'aaaa')">
</template>

<script setup lang="ts">
    const handleChange = (e: Event, comment: string) => {
        console.log((e.target as HTMLInputElement).value)
    }
</script>