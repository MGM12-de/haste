<script setup lang="ts">
function addGame() {
  navigateTo('/games/create')
}
</script>

<template>
  <UButton label="Add Game" @click="addGame()" />
</template>
