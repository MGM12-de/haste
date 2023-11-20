<template>
    <UPage>
        <UPageHeader title="Login" description="Login to your account or register." icon="i-heroicons-user" />

        <UPageBody>
            <UForm :state="state" class="space-y-4" @submit="login" :schema="schema">
                <UFormGroup label="Email" name="email">
                    <UInput v-model="state.email" />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                    <UInput v-model="state.password" type="password" />
                </UFormGroup>

                <UButton type="submit">
                    Login
                </UButton>
            </UForm>
        </UPageBody>
    </UPage>
</template>

<script setup lang="ts">
import { string, objectAsync, email, minLength, type Input } from 'valibot'
import type { FormSubmitEvent } from '#ui/types'

const schema = objectAsync({
    email: string([email('Invalid email')]),
    password: string([minLength(8, 'Must be at least 8 characters')])
})
type Schema = Input<typeof schema>

const state = reactive({
    email: undefined,
    password: undefined
})

const login = (event: FormSubmitEvent<Schema>) => {
    useToast().add({ title: 'Login successfully', description: 'You can now access your private data.' })
}
</script>