<template>
    <UPage>
        <UPageHeader :title="team.title" />
        <UPageBody>
            <TeamDetail :team="team" />
        </UPageBody>
    </UPage>
</template>

<script setup lang="ts">
const route = useRoute()
const supabase = useSupabaseClient()

const { data: team, error } = await useAsyncData(`team`, async () => {
    const { data } = await supabase.from('teams').select('*').eq('id', route.params?.id).single();
    return data
});


</script>