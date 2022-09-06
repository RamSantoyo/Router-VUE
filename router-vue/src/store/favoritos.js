import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useFav = defineStore("favoritos", ()  =>  {
    
    const favoritos = ref([]);

    if (localStorage.getItem("favoritos")) {
        favoritos.value = JSON.parse(localStorage.getItem("favoritos"));
    }
    
    const addFavorito = (favorito) => {
        favoritos.value.push(favorito)
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value))//guarda en el local storage
    }

    const removeFavorito = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id !== id)
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value))
    }
    
    const repetido = name => favoritos.value.find(item => item.name === name) 

    return {
        favoritos,
        addFavorito,
        removeFavorito,
        repetido
    }
});