<template>
    <UPage>
        <UPageHeader title="Teams" />
        <UPageBody>

            <UTable :rows="teams" :loading="pending" />

        </UPageBody>
    </UPage>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const { pending, data: teams } = await useAsyncData('teams', async () => {
    const { data } = await supabase.from('teams').select('*');
    return data
});

</script>