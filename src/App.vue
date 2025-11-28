<script setup>
import { ref } from 'vue';
import Modal from './components/Modal.vue';
import ImgModal from './components/ImgModal.vue';
let modalActive = ref(false);
let modal2Active = ref(false);
let modal3Active = ref(false);
</script>
<template>
    <div class="container is-fluid content mt-2">
        <button class="button is-primary" @click="modalActive = true">Open Modal</button>
        <button class="button is-info" @click="modal2Active = true">Open Modal 2</button>
        <button class="button is-warning" @click="modal3Active = true">Open Modal 3</button>
        <ImgModal :active="modalActive" @close="modalActive = false" url="https://picsum.photos/1280/960?r=1"></ImgModal>
        <ImgModal :active="modal2Active" @close="modal2Active = false" url="https://picsum.photos/1280/960?r=2"></ImgModal>
        <Modal :active="modal3Active" @close="modal3Active = false">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec
                        id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus
                        et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis
                        consectetur purus sit amet fermentum.
                    </div>
                </div>
            </div>
        </Modal>
    </div>
</template>