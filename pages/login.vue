<template>
    <UPage>
        <UPageHeader title="Login" description="Login to your account or register." icon="i-heroicons-user" />

        <UPageBody>
            <UTabs :items="items" class="w-full">
                <template #item="{ item }">
                    <UForm :state="state" class="space-y-4" @submit="onClick(item)" :schema="schema">
                        <UFormGroup label="Email" name="email">
                            <UInput v-model="state.email" />
                        </UFormGroup>

                        <UFormGroup label="Password" name="password">
                            <UInput v-model="state.password" type="password" />
                        </UFormGroup>

                        <UButton type="submit">
                            {{ item.label }}
                        </UButton>
                    </UForm>
                </template>
            </UTabs>
        </UPageBody>
    </UPage>
</template>

<script setup lang="ts">
import { string, objectAsync, email, minLength, type Input } from 'valibot'
import type { FormSubmitEvent, TabItem } from '#ui/types'

const items = [{ key: 'login', label: 'Login' }, { key: 'register', label: 'Register' }]

const supabase = useSupabaseClient()

const schema = objectAsync({
    email: string([email('Invalid email')]),
    password: string([minLength(8, 'Must be at least 8 characters')])
})
type Schema = Input<typeof schema>

const state = reactive({
    email: ref(''),
    password: ref('')
})

const onClick = async (item: TabItem) => {
    if (item.key === 'login') {
        login()
    } else {
        register()
    }
}


const login = async () => {

    const { error } = await supabase.auth.signInWithPassword({
        email: state.email,
        password: state.password
    })

    console.log(error)
    if (error) {
        useToast().add({ title: 'Login failed', description: error.message })
    } else {
        useToast().add({ title: 'Login successfully', description: 'You can now access your private data.' })
    }
}

const register = async () => {
    const { error } = await supabase.auth.signUp({
        email: state.email,
        password: state.password
    })

    console.log(error)
    if (error) {
        useToast().add({ title: 'Sign-Up failed', description: error.message })
    } else {
        useToast().add({ title: 'Sign-Up successfully', description: 'You can now access your private data.' })
    }
}
</script>