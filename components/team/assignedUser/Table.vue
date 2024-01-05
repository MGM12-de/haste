<template>
    <UTable :rows="data" :columns="columns">
    </UTable>
    <div class="float-right">
        <UButton label="Create assignment" @click="createAssignment()" />

    </div>
</template>
<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const columns = [
    {
        key: 'profiles.username',
        label: 'Username',
        sortable: true
    },
    {
        key: 'profiles.firstName',
        label: 'First name',
        sortable: true
    },
    {
        key: 'profiles.lastName',
        label: 'Last name',
        sortable: true
    }
]

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    team: {
        type: Object,
        required: true,
    },
});
const { data, team } = props;

const createAssignment = () => {
    console.log('createAssignment')
    const assignment = { assignedTeam: team.id, userId: user.value.id }
    supabase.from('assignedTeams').upsert(assignment).then((result) => {
        useToast().add({ title: 'success', description: result })
    })
}
</script>