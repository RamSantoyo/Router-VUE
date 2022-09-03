<script setup>
import { RouterLink } from "vue-router"// para hacer una nueva ruta y mandar parametros
import { useGetData } from "@/composables/getData"
import cargar from '../components/loading.vue'//componente para mostrar un spinner
import { ref } from "@vue/reactivity";


const { pokeapi, pokemones, loading } = useGetData();
pokeapi('https://pokeapi.co/api/v2/pokemon?limit=1000');

let inicio = ref(0);
let fin = ref(5);
let estatico = ref(1);
const aumentar = () =>{
    inicio.value = inicio.value + 5;
    fin.value = fin.value + 5;
    estatico.value = estatico.value + 1;
}

const disminuir = () =>{
    inicio.value = inicio.value - 5;
    fin.value = fin.value - 5;
    estatico.value = estatico.value - 1;
}

</script>

<template>
    <div v-if="loading">
        <cargar />
    </div>
    <div v-else>
        <div class="container text-center">
            <h1 class="mt-5 mb-5">Elige un Pokemon</h1>
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item">
                        <button class="btn bnt-succes me-2" 
                        @click="disminuir" 
                        :disabled="inicio <= 0 ? true : false">Previous</button>
                    </li>
                    <li class="page-item">
                        <a class="page-link">{{estatico}}</a>
                    </li>
                    <li class="page-item">
                        <button class="btn bnt-succes me-2" 
                        @click="aumentar" 
                        :disabled="fin >= pokemones.length ? true : false">Next</button>
                    </li>
                </ul>
            </nav>
            <ul class="list-group list-group-flush">
                <li v-for="pokemon in pokemones.slice(inicio, fin)" class="list-group-item">
                    <router-link :to="`/pokemon/${pokemon.name}`"
                        style="color:black; text-decoration: none; text-transform: uppercase; font-weight: 500; font-size: 1.5rem;">
                        {{ pokemon.name }}</router-link>
                    <!--crea ruta y mandamos parametro-->
                </li>
            </ul>

        </div>
    </div>
</template> 

<style scoped>
</style>