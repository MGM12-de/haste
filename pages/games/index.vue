<template>
    <UPage>
        <UPageHeader title="Games" />
        <UPageBody>
            <GameTable :games="games" :pending="pending" />
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
