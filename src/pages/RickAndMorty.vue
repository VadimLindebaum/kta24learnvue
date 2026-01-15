<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';

let characters = ref([]);
let info = ref({});
let currentPage = ref(1);
await getCharacters('https://rickandmortyapi.com/api/character');

async function getCharacters(url) {
    let res = await axios.get(url);
    console.log(res);

    characters.value = res.data.results;
    info.value = res.data.info;
}

async function next() {
    currentPage.value++;
    await getCharacters(info.value.next);
}

async function prev() {
    currentPage.value--;
    await getCharacters(info.value.prev);
}

async function getPage(page) {
    currentPage.value = page;
    await getCharacters('https://rickandmortyapi.com/api/character?page=' + page);
}

function makePages(pages, current) {
    let elements = [];
    for(let i = 1; i<=3; i++){
        elements[i] = i;
    }
    if(current > 3) {
        elements.push('...');
    }
    for(let i = current-2; i<=current+2 && i<=pages; i++){
        elements[i] = i;
    }

    if(current+2 < pages) {
        elements.push('...');
    }

    for(let i = pages-2; i<=pages; i++){
        elements[i] = i;
    }

    return elements.filter(p => p);   
}


</script>
<template>
    <div class="container">
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <button @click="prev" :disabled="!info.prev" class="pagination-previous">Previous</button>
            <button @click="next" :disabled="!info.next" class="pagination-next">Next page</button>
            <ul class="pagination-list">
                <li v-for="page in makePages(info.pages, currentPage)">
                    <span v-if="page === '...'" class="pagination-ellipsis">&hellip;</span>
                    <button v-else-if="page === currentPage" class="pagination-link is-current" :aria-label="'Page ' + page" aria-current="page">{{ page }}</button>
                    <button v-else @click="getPage(page)" class="pagination-link" :aria-label="'Goto page ' + page">{{ page }}</button>
                </li>
            </ul>
        </nav>

        <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="character in characters">
                <CharacterCard :character="character"></CharacterCard>
            </div>
        </div>
    </div>
</template>