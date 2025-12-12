<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';

let characters = ref([]);
let info = ref({});
await getCharacters('https://rickandmortyapi.com/api/character');

async function getCharacters(url) {
    let res = await axios.get(url);
    console.log(res);

    characters.value = res.data.results;
    info.value = res.data.info;
}

async function next() {
    await getCharacters(info.value.next);
}

async function prev() {
    await getCharacters(info.value.prev);
}

</script>
<template>
    <div class="container">
        <nav class="is-flex is-justify-content-space-between my-2">
            <button class="button is-primary" @click="prev" :disabled="!info.prev">Previous</button>
            <button class="button is-primary" @click="next" :disabled="!info.next">Next</button>
        </nav>
        <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="character in characters">
                <CharacterCard :character="character"></CharacterCard>
            </div>
        </div>
    </div>
</template>