<template>
    <h2>Assigned User</h2>

    <TeamAssignedUserTable :data="data" :team="team" />
</template>

<script setup lang="ts">
const props = defineProps({
    team: {
        type: Object,
        required: true,
    },
});
const { team } = props;

const { data } = await useAsyncData(`team/${team.id}/assignedUser`, async () => {
    const { data } = await useFetch(`/api/team/${team.id}/assignedUsers`);
    return data
});
</script>