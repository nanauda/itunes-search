<template>
 <form @submit.prevent="searchItunes(searchText)">
    <input type="text" v-model="searchText">
    <button @click="searchItunes(searchText)">Search!</button>

    <div v-if="data.results">
        <div v-for="album in data.results" :key="album.artistId">
        <Album :album="album"/>
        </div>
    </div>
 </form>
    
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { ItunesTypes } from './types/ItunesTypes.interface'
import { itunesSearch } from './services/iTunesAPI';
import Album from './components/Album.vue';

export default defineComponent({
    name: "App",
    components: {
        Album
    },
    setup() {
        const albums = reactive<{data: ItunesTypes}>({data: {}})
        const searchText = ref("")
        const searchItunes = async (search: string): Promise<void> => {
            const value = await itunesSearch(search)
            albums.data = value
        }
        return {
            searchItunes,
            searchText,
            ...toRefs(albums)
        }
    },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>