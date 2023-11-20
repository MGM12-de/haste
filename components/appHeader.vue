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
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
}, {
    label: 'About',
    icon: 'i-heroicons-book-open',
    to: '/about'
}, {
    label: 'Login',
    icon: 'i-heroicons-user-circle',
    to: '/login'
}]
</script>