<template>
    <UPage>
        <UPageHeader title="Teams" />
        <UPageBody>

            <UTable :rows="teams" :loading="pending">
                <template #empty-state>
                    <div class="flex flex-col items-center justify-center py-6 gap-3">
                        <span class="italic text-sm">No team found!</span>
                        <UButton label="Add Team" />
                    </div>
                </template>
            </UTable>

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