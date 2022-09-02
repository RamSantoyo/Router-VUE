<script setup>
import { useRoute, useRouter} from 'vue-router'
import cargar from '../components/loading.vue'//componente para mostrar un spinner
import {useGetData} from "@/composables/getData"


const route = useRoute();//para acceder la ruta con el parametro
const router = useRouter();// para modificar la ruta al hacer una accion

const urlnueva = () => { //funcion para crear una nueva ruta
    router.push('/pokemons');
}

const {pokedif, statuspoke, loading} = useGetData();
pokedif('https://pokeapi.co/api/v2/pokemon/' + route.params.name);
        
</script>
    
    <template>    
    <div class="container text-center">
        <div v-if="loading">
           <cargar/>
        </div> 
        <div v-else> 
            <div v-if="statuspoke">
                <div class="mt-5">
                    <h1>El pokemon es: {{$route.params.name}}</h1>
                    <img style="width: 20rem;" :src="statuspoke.sprites?.other.home.front_default" alt="pokemon">
                </div>        
                <div class="mt-5">
                    <button type="button" class="btn btn-success mb-5" @click="urlnueva">REGRESAR</button>
                </div>
            </div>
            <div v-else>
                <h1>El pokemon no existe</h1>
                <button type="button" class="btn btn-success mb-5" @click="urlnueva">REGRESAR</button>
            </div>
        </div>        
    </div>
    </template>
    
    <style scoped>
    
    </style>