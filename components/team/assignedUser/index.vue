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
const client = useSupabaseClient()

const { data } = await useAsyncData(`team/${team.id}/assignedUser`, async () => {
    const { data } = await client.from('assignedTeams').select(`userId, profiles ( * )`).eq('assignedTeam', team.id);
    return data
});
</script>