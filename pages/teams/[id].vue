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

const { data: team, error } = await useAsyncData(`team/${route.params.id}`, async () => {
    const { data } = await useFetch(`/api/team/${route.params.id}`);
    return data
});
</script>