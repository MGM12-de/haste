<script setup lang="ts">
function addTeam() {
  navigateTo('/teams/create')
}
</script>

<template>
  <UButton label="Add Team" @click="addTeam()" />
</template>
