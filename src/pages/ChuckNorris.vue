<script setup>
import { ref } from 'vue';

let joke = ref('');

const req = new XMLHttpRequest();
req.addEventListener("load", function (){
    let res = this.responseText;
    let data = JSON.parse(res);
    console.log(data.value);
    joke.value = data.value;
});
req.open("GET", "https://api.chucknorris.io/jokes/random");
req.send();
</script>
<template>
<div class="container content">
    <h1>{{ joke }}</h1>
</div>
</template>