<template>
    <UPage>
        <UPageHeader title="Teams" />
        <UPageBody>
            <TeamTable :teams="teams" :pending="pending" />
            <div class="mt-4 float-right">
                <TeamCreateButton v-if="!teams" />
            </div>

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