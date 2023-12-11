<template>
    <UPage>
        <UPageHeader title="Games" />
        <UPageBody>

            <UTable :rows="games" :loading="pending">
                <template #empty-state>
                    <div class="flex flex-col items-center justify-center py-6 gap-3">
                        <span class="italic text-sm">No game found!</span>
                        <GameCreateButton />
                    </div>
                </template>
            </UTable>

            <div class="mt-4 float-right">
                <GameCreateButton v-if="!games" />
            </div>

        </UPageBody>
    </UPage>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const { pending, data: games } = await useAsyncData('games', async () => {
    const { data } = await supabase.from('games').select('*');
    return data
});
</script>
