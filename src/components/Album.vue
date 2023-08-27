<template>
    <h2>{{ album.collectionName }}</h2>
    <h4>画像</h4>
    <img :src="album.artworkUrl100" alt="">
    <h4>price: {{ album.collectionPrice }}</h4>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { Result } from '../types/ItunesTypes.interface';

export default defineComponent({
    props: {
        album: {
            type: Object as PropType<Result>,
            required: true
        }
    },
    setup() {
        return {};
    },
})
</script>
