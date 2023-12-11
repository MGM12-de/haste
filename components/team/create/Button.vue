<template>
    <UButton label="Add Team" @click="addTeam()" />
</template>

<script setup lang="ts">
const addTeam = () => {
    navigateTo('/teams/create');
};
</script>