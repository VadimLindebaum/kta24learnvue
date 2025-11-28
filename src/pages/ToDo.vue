<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';

let newItem = ref('');
let i = 1;
let items = ref([
    {id: i++, name: 'Sai', isDone: true},
    {id: i++, name: 'Leib', isDone: false},
    {id: i++, name: 'Piim', isDone: true},
    {id: i++, name: 'Viin', isDone: false},
]);

function addItem(){
    if(newItem.value.trim() !== ''){
        items.value.push({id: i++, name: newItem.value.trim(), isDone: false});
    }
    newItem.value = '';
}

let doneItems = computed(() => items.value.filter(item => item.isDone));
let toDoItems = computed(() => items.value.filter(item => !item.isDone));

</script>

<template>
    <div class="container is-fluid content mt-2">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input @keydown.enter="addItem" v-model="newItem" class="input" type="text" placeholder="Add Item">
            </div>
            <div class="control">
                <button class="button is-info" @click="addItem">
                    Add Item
                </button>
            </div>
        </div>

        <ItemList :items="items" title="All Items"></ItemList>
        <ItemList :items="doneItems" title="Done Items"></ItemList>
        <ItemList :items="toDoItems" title="ToDo Items"></ItemList>
    </div>
</template>