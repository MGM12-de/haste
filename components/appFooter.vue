<script setup>
const links = []
</script>

<template>
    <UFooter :links="links">
        <template #left>
            Copyright © {{ new Date().getFullYear() }}
        </template>

        <template #right>
            <UButton icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/miggi92"
                target="_blank" />
        </template>
    </UFooter>
</template>

