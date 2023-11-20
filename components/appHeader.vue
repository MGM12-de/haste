<template>
    <UHeader :links="links">
        <template #logo>
            <Logo class="w-auto h-6" />
        </template>

        <template #right>
            <UColorModeButton />
        </template>

        <template #panel>
            <UAsideLinks :links="links" />
        </template>
    </UHeader>
</template>

<script setup lang="ts">
const links = [{
    label: 'Documentation',
    icon: 'i-heroicons-book-open',
    to: '/getting-started'
}, {
    label: 'Pro',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/pro'
}]
</script>