<template>
    <UForm :state="state" class="space-y-4" @submit="onCreate()">
        <UFormGroup label="Home team" name="homeTeam">
            <UInput v-model="state.homeTeam" />
        </UFormGroup>
        <UFormGroup label="Away team" name="awayTeam">
            <UInput v-model="state.awayTeam" />
        </UFormGroup>
        <UButton type="submit" label="Create Game" />
    </UForm>
</template>

<script setup lang="ts">
const client = useSupabaseClient();
const user = useSupabaseUser();
const state = reactive({
    homeTeam: ref(''),
    awayTeam: ref(''),
})

const onCreate = async () => {
    client.from('games').upsert(state).then(() => {
        navigateTo('/games')
    })
}
</script>