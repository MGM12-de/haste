<template>
    <h2>Assigned User</h2>

    <TeamAssignedUserTable :data="data" />
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const props = defineProps({
    team: {
        type: Object,
        required: true,
    },
});
const { team } = props;

const { data } = await useAsyncData(`assignedUser${team.id}`, async () => {
    const { data } = await supabase.from('assignedTeams').select('*').eq('assignedTeam', team.id)
    return data
});
</script>