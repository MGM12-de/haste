<template>
    <UHeader :links="links">
        <template #logo>
            <appLogo class="w-auto h-6" />
        </template>

        <template #center>
            <div v-if="user">
                <UHeaderLinks :links="loggedLinks" />
            </div>
            <div v-else>
                <UHeaderLinks :links="links" />
            </div>
        </template>

        <template #right>
            <UColorModeButton />
            <UPopover v-if="user">
                <userAvatar />
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

const allLinks = [{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
}]

const loggedLinks = [...allLinks, {
    label: 'Games',
    icon: 'i-heroicons-game-controller',
    to: '/games'
}];

const links = [...allLinks, {
    label: 'Prices',
    icon: 'i-heroicons-currency-euro',
    to: '/prices'
}, {
    label: 'Login',
    icon: 'i-heroicons-user-circle',
    to: '/login'
}];

const userLinks = [{
    label: 'Profile',
    icon: 'i-heroicons-user',
    to: '/profile'
}, {
    label: 'Logout',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    to: '/logout'
}]
</script>