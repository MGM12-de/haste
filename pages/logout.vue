<script setup lang="ts">
const client = useSupabaseClient()
client.auth.signOut()
navigateTo('/')
</script>

<template></template>
