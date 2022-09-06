<script setup>
  import { useCounterStore } from '@/store/counter.js'

  const estado = useCounterStore();
</script>

<template>
  <div class="about">
    <h1>Estas usado Pinia</h1>
    <h2>El estado es: {{estado.count}}</h2>
    <h2>Accion computada {{estado.multiplo}}</h2>
    <button class="btn btn-primary" @click="estado.increment">Incrementar</button>
  </div>
</template>

<style>

</style>
