<template>
    <div v-if="album">
        <h2>{{ album.collectionName }}</h2>
        <h4>画像</h4>
        <img :src="album.artworkUrl100" alt="">
        <h4>price: {{ album.collectionPrice }}</h4>
    </div>
</template>

<script setup lang="ts">
import { Result } from '../types/ItunesTypes';
const props = defineProps<{
  album: Result
}>()
</script>
