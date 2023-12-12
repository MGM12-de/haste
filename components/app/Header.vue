<template>
    <UHeader :links="links">
        <template #logo>
            <appLogo class="w-auto h-12" />
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
            <UAsideLinks :links="loggedLinks" v-if="user" />
            <UAsideLinks :links="links" v-else />
        </template>
    </UHeader>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

const allLinks = [{
    label: 'Home',
    icon: 'i-mdi-home',
    to: '/'
}]

const loggedLinks = [...allLinks, {
    label: 'Games',
    icon: 'i-mdi-gamepad-variant',
    to: '/games'
}, {
    label: 'Teams',
    icon: 'i-mdi-account-group',
    to: '/teams'
}];

const links = [...allLinks, {
    label: 'Prices',
    icon: 'i-mdi-currency-eur',
    to: '/prices'
}, {
    label: 'Login',
    icon: 'i-mdi-account',
    to: '/login'
}];

const userLinks = [{
    label: 'Profile',
    icon: 'i-mdi-account',
    to: '/profile'
}, {
    label: 'Logout',
    icon: 'i-mdi-logout',
    to: '/logout'
}]
</script>