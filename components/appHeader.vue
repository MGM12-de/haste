<template>
    <UHeader :links="links">
        <template #logo>
            <appLogo class="w-auto h-6" />
        </template>

        <template #right>
            <UColorModeButton />
            <UPopover v-if="user">
                <UAvatar alt="custom user" />
                <template #panel>
                    <UVerticalNavigation :links="userLinks" />
                </template>
            </UPopover>
        </template>

        <template #panel>
            <UAsideLinks :links="links" />
        </template>
    </UHeader>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

const links = [{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
}, {
    label: 'About',
    icon: 'i-heroicons-book-open',
    to: '/about'
}, {
    label: 'Prices',
    icon: 'i-heroicons-currency-euro',
    to: '/prices'
}, {
    label: 'Login',
    icon: 'i-heroicons-user-circle',
    to: '/login'
}]
const userLinks = [{
    label: 'Logout',
    icon: 'i-heroicons-user',
    to: '/logout'
}]
</script>