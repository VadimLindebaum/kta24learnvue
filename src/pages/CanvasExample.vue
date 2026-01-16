<script setup>
import { onMounted } from 'vue';

let x = 95;
let y = 50

onMounted(() => {
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    setInterval(() => {
        ctx.clearRect(x-40, y-40, 80, 80);
        x++;
        ctx.beginPath();
        ctx.arc(x, y, 40, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }, 16.6);
});


</script>
<template>
    <canvas id="myCanvas" height="800" width="1200"></canvas>
</template>
<style>
    canvas {
        background-color: white;
    }
</style>