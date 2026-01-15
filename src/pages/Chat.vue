<script setup>
import { ref } from 'vue';


let message = ref('');
let messages = ref([]);
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", (event) => {

});

// Listen for messages
socket.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
    messages.value.push(JSON.parse(event.data));
});

function send() {
    if (message.value.trim() !== '') {
        socket.send(JSON.stringify({message: message.value, isMe: false}));
        messages.value.push({message: message.value, isMe: true});
    }
    message.value = '';
}
</script>

<template>
    <div class="container">
        <input v-model="message" type="text" class="input mb-2" @keydown.enter="send">
        <div class="columns" v-for="msg in messages">
            <div class="column is-half" :class="{'is-offset-half': msg.isMe}">
                <article class="message mb-2" :class="{'is-primary': msg.isMe, 'is-link': !msg.isMe}">
                    <div class="message-body">
                    {{ msg.message }}
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>