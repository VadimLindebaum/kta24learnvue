<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';

let characters = ref([]);
let info = ref({});
let currentPage = ref(1);
let searchValue = ref('');
await getCharacters('https://rickandmortyapi.com/api/character');

async function getCharacters(url) {
    let res = await axios.get(url);
    console.log(res);

    characters.value.push(...res.data.results);
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
    for (let i = 1; i <= 3; i++) {
        elements[i] = i;
    }
    if (current > 3) {
        elements.push('...');
    }
    for (let i = current - 2; i <= current + 2 && i <= pages; i++) {
        elements[i] = i;
    }

    if (current + 2 < pages) {
        elements.push('...');
    }

    for (let i = pages - 2; i <= pages; i++) {
        elements[i] = i;
    }

    return elements.filter(p => p);
}
document.addEventListener('scroll', () => {
    console.log(window.innerHeight + window.scrollY, document.body.clientHeight);
    if (window.innerHeight + window.scrollY > document.body.clientHeight - 200) {
        next();
    }
})

async function search(){
    characters.value = [];
    await getCharacters('https://rickandmortyapi.com/api/character?name=' + searchValue.value);
}


</script>
<template>

    <div class="container">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input v-model="searchValue" class="input" type="text" placeholder="Find a Character">
            </div>
            <div class="control">
                <button @click="search" class="button is-info">
                    Search
                </button>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="character in characters">
                <CharacterCard :character="character"></CharacterCard>
            </div>
        </div>
    </div>
</template>