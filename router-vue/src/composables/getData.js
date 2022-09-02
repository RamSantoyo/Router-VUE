import axios from "axios";
import {ref} from "vue";

export const useGetData = () => {

    const pokemones = ref([]);//array de pokemones
    let statuspoke = ref({});//se ponen llaves para acceder a los objetos en este caso
    let loading = ref(true);

    const pokeapi = async(url) => {
        try {
            const data = await axios.get(url); 
            pokemones.value = data.data.results;
        } catch (error) {
            return error;
        }finally{
            loading.value = false;
        }
    };    

    const pokedif = async(url) =>{
        try{
            const data = await axios.get(url);
            statuspoke.value = data.data;
        }catch(error){
            return statuspoke.value = null;    
        }finally{
            loading.value = false;
        }
    }

    return{
        pokeapi,
        pokedif,
        pokemones,
        statuspoke,
        loading
    };
};