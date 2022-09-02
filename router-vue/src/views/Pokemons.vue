<script setup>
import { ref } from '@vue/reactivity'
import axios from 'axios'
import { RouterLink } from 'vue-router'// para hacer una nueva ruta y mandar parametros
import cargar from '../components/loading.vue'//componente para mostrar un spinner


let loading = ref(true);//para mostrar un spinner mientras carga la informacion

let pokemones = ref([]);
const pokeapi = async() => {
    try {
        const data = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'); 
        pokemones.value = data.data.results;
    } catch (error) {
        return error;
    }finally{
        loading.value = false;
    }
}

pokeapi();
</script>

<template>
    <div v-if="loading">
        <cargar/>
    </div>
    <div v-else>
        <div class="container text-center">
            <h1 class="mt-5 mb-5">Elige un Pokemon</h1>
            <div>
                <ul class="list-group list-group-flush">
                    <li v-for="pokemon in pokemones" class="list-group-item">
                    <router-link :to="`/pokemon/${pokemon.name}`" style="color:black; text-decoration: none; text-transform: uppercase; font-weight: 500; font-size: 1.5rem;">{{pokemon.name}}</router-link><!--crea ruta y mandamos parametro-->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template> 

<style scoped>

</style>