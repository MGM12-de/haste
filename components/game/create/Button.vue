<template>
    <UButton label="Add Game" @click="addGame()" />
</template>

<script setup lang="ts">
const addGame = () => {
    navigateTo('/games/create');
};
</script>