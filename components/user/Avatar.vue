<script setup lang="ts">
const user = useSupabaseUser()
const userData = user.value;
var userAvatar = "";
</script>

<template>
    <UAvatar :src="userData?.user_metadata?.avatar_url" :alt="userData?.email" size="2xl" />
</template>