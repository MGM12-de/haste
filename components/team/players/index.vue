<template>
    <h2>Players</h2>
    <PlayersTable :players="data" />
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

const { data } = await useAsyncData(`team/${team.id}/players`, async () => {
    const { data } = await client.from('players').select(`*, playersTeam (  )`).eq('playersTeam.teamId', team.id);
    return data
});
</script>