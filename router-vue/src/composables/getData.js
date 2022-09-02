import axios from "axios";
import {ref} from "vue";

export const useGetData = () => {

    const pokemones = ref([]);
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

    return{
        pokeapi,
        pokemones,
        loading
    };
};