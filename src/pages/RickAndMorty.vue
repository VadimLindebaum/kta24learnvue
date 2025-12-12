<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';

let characters = ref([]);

let res = await axios.get('https://rickandmortyapi.com/api/character');
console.log(res);
characters.value = res.data.results;
</script>
<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="character in characters">
                <CharacterCard :character="character"></CharacterCard>
            </div>
        </div>
    </div>
</template>