import { createApp } from 'vue';
import App from './App.vue';

import { createMemoryHistory, createWebHashHistory, createWebHistory, createRouter } from 'vue-router';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import ChuckNorris from './pages/ChuckNorris.vue';
import RickAndMorty from './pages/RickAndMorty.vue';
import Chat from './pages/Chat.vue';
import CanvasExample from './pages/CanvasExample.vue';

const routes = [
  { path: '/', component: ToDo, name: 'ToDo' },
  { path: '/modals', component: Modals, name: 'Modals'},
  { path: '/chuck', component: ChuckNorris, name: 'Chuck Norris'},
  { path: '/rick-and-morty', component: RickAndMorty, name: 'Rick And Morty'},
  { path: '/chat', component: Chat, name: 'Chat'},
  { path: '/canvas', component: CanvasExample, name: 'Canvas'},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App);
app.use(router);
app.mount('#app');