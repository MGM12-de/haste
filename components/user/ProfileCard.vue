<script setup lang="ts">
const user = useSupabaseUser()
const userData = user.value;
var userAvatar = "";
var editable = false;

const state = reactive({
    email: userData?.email,
    phone: userData?.phone,
    id: userData?.id
})

const onUpdate = () => {

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

            <UButton type="submit" :disabled="!editable">
                Update
            </UButton>
        </UForm>

        <template #footer>
            <p>Last sign-in: {{ userData?.last_sign_in_at }}</p>
        </template>
    </UCard>
</template>