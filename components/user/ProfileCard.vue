<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const userData = user.value;
var editable = true;

const state = reactive({
    email: userData?.email,
    phone: userData?.phone,
    id: userData?.id,
    username: ""
})

const { data, error } = await useAsyncData('user', async () => {
    const { data } = await supabase.from('profiles').select('*').eq('id', userData?.id).single();
    return data
});
state.username = data.value?.username;
// if (error) {
//     console.log(error)
//     ().add({ title: 'Get username failed', description: error.message })
// } 

const onUpdate = async () => {
    const updates = {
        id: userData?.id,
        avatar_url: "https://avatars.dicebear.com/api/avataaars/John.svg",
        username: state.username,
        updated_at: new Date()
    }

    const { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
    })

    if (error) {
        useToast().add({ title: 'Updated failed', description: error.message })
    } else {
        useToast().add({ title: 'Updated successfully', description: 'Profile data was updated.' })
    }
}

</script>

<template>
    <UCard>
        <template #header>
            <UserAvatar />
        </template>

        <UForm :state="state" class="space-y-4" @submit="onUpdate">
            <UFormGroup label="UID" name="id">
                <UInput v-model="state.id" disabled />
            </UFormGroup>
            <UFormGroup label="Email" name="email">
                <UInput v-model="state.email" :disabled="!editable" />
            </UFormGroup>
            <UFormGroup label="Phone" name="phone">
                <UInput v-model="state.phone" :disabled="!editable" />
            </UFormGroup>

            <UFormGroup label="Username" name="username">
                <UInput v-model="state.username" :disabled="!editable" />
            </UFormGroup>

            <UButton type="submit" :disabled="!editable">
                Update
            </UButton>
        </UForm>

        <template #footer>
            <p>Last sign-in: {{ userData?.last_sign_in_at }}</p>
        </template>
    </UCard>
</template>