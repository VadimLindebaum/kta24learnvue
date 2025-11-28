<script setup>
import { ref } from 'vue';

let message = ref('Hello Vue');


</script>

<template>
    <div class="container content mt-2">
        <button class="button is-primary" @click="message = 'Hello KTA24!'">Click Me!</button>
        <input class="input" v-model="message">
        <h1>{{ message.split('').reverse().join('') }}</h1>
    </div>
</template>