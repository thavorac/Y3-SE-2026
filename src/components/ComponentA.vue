<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div>
    <h3>A</h3>
    <p>
      Data from other component
      <br />
      name: {{ $route.params.name }}
    </p>
    <a href="/B">B </a>
    <a href="/C">C </a>
    <a href="/D">D </a>

    <button @click="router.back()">Back</button>
  </div>
</template>
