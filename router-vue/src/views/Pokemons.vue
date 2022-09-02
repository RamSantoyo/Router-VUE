<script setup>
import { RouterLink } from "vue-router"// para hacer una nueva ruta y mandar parametros
import {useGetData} from "@/composables/getData"
import cargar from '../components/loading.vue'//componente para mostrar un spinner


const {pokeapi, pokemones, loading} = useGetData();
pokeapi('https://pokeapi.co/api/v2/pokemon?limit=1000');

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