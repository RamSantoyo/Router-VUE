<script setup>
import { useFav } from '@/store/favoritos.js'
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const fav = useFav();

const { favoritos } = storeToRefs(fav); //para refrescar el array de favoritos
const { removeFavorito } = fav; //para acceder a la funcion de agregar favorito o destucting

</script>

<template>
<div class="about">
    <h1>Favoritos</h1>
    <ul>
        <li v-for="pokefav in favoritos" :key="pokefav.id" style="font-size: 2rem;">
           <img :src="pokefav.sprites?.other.home.front_default" style="width:10rem;">
           {{pokefav.name}}
            <button class="btn btn-danger m-2" @click="removeFavorito(pokefav.id)">Eliminar</button>
            <router-link :to="'/pokemon/' + pokefav.name" class="btn btn-success m-2">Ver</router-link>
        </li>
    </ul>    
</div>
</template>

<style scoped>

</style>