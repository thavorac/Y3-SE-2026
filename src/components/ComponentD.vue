<script setup lang="ts">
import router from "@/router";
</script>
<template>
  <div>
    <h3>D</h3>
    <button
      @click="router.push({ name: 'component-a', params: { name: 'dara' } })"
    >
      A
    </button>
    <button @click="router.push('B')">B</button>
    <button @click="router.push('C')">C</button>
  </div>
</template>
