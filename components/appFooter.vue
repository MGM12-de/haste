<script setup>
const links = [{
    label: 'About',
    icon: 'i-heroicons-book-open',
    to: '/about'
}, {
    label: 'Imprint',
    icon: 'i-heroicons-information-circle',
    to: '/imprint'
}]
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

