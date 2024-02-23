<template>
    <UPage>
        <UPageHeader title="Login" description="Login to your account or register." icon="i-mdi-account" />

        <UPageBody>
            <UCard class="max-w-sm w-full">
    <UAuthForm
      :fields="fields"
      :validate="validate"
      :providers="providers"
      title="Welcome back!"
      align="top"
      icon="i-heroicons-lock-closed"
      :ui="{ base: 'text-center', footer: 'text-center' }"
      @submit="onSubmit"
    >
      <template #description>
        Don't have an account? <NuxtLink to="/" class="text-primary font-medium">Sign up</NuxtLink>.
      </template>

      <template #password-hint>
        <NuxtLink to="/" class="text-primary font-medium">Forgot password?</NuxtLink>
      </template>

      <template #footer>
        By signing in, you agree to our <NuxtLink to="/" class="text-primary font-medium">Terms of Service</NuxtLink>.
      </template>
    </UAuthForm>
  </UCard>
        </UPageBody>
    </UPage>
</template>

<script setup lang="ts">
import type { FormError } from '#ui/types'
const supabase = useSupabaseClient()


const fields = [{
  name: 'email',
  type: 'text',
  label: 'Email',
  placeholder: 'Enter your email'
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password'
}]

const validate = (state: any) => {
  const errors: FormError[] = []
  if (!state.email) errors.push({ path: 'email', message: 'Email is required' })
  if (!state.password) errors.push({ path: 'password', message: 'Password is required' })
  return errors
}

const providers = [{
  label: 'Continue with Google',
  icon: 'i-mdi-google',
  color: 'white' as const,
  click: () => {
    signInWithGoogle()
  }
}]

async function onSubmit (data: any) {
  console.log('Submitted', data)
  const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
    })

    console.log(error)
    if (error) {
        useToast().add({ title: 'Login failed', description: error.message })
    } else {
        useToast().add({ title: 'Login successfully', description: 'You can now access your private data.' })
        navigateTo('/')
    }
}

// const register = async () => {
//     const { error } = await supabase.auth.signUp({
//         email: state.email,
//         password: state.password
//     })
//     console.log(error)
//     if (error) {
//         useToast().add({ title: 'Sign-Up failed', description: error.message })
//     } else {
//         useToast().add({ title: 'Sign-Up successfully', description: 'You can now access your private data.' })
//         navigateTo('/')
//     }
// }

const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
    })

    console.log(error)
    if (error) {
        useToast().add({ title: 'Login failed', description: error.message })
    } else {
        useToast().add({ title: 'Login successfully', description: 'You can now access your private data.' })
        navigateTo('/')
    }
}
</script>