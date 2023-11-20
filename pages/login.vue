<template>
    <UPage>
        <UPageHeader title="Login" description="Login to your account or register." icon="i-heroicons-user" />

        <UPageBody>

            <UButton label="Login" @click="login" />
        </UPageBody>
    </UPage>
</template>

<script setup lang="ts">


const login = () => {
    useToast().add({ title: 'Login successfully' })
}
</script>