<template>
    <UTable :columns="columns" :rows="teams" :loading="pending" @select="rowClick">
        <template #empty-state>
            <div class="flex flex-col items-center justify-center py-6 gap-3">
                <span class="italic text-sm">No team found!</span>
                <TeamCreateButton />
            </div>
        </template>
    </UTable>
</template>

<script setup lang="ts">
const props = defineProps({
    teams: {
        type: Object,
        required: true,
    },
    pending: {
        type: Boolean,
        required: true,
    },
});
const { teams, pending } = props;

const columns = [{ key: 'title', label: 'Name' }];

const rowClick = (row: any) => {
    navigateTo(`/teams/${row.id}`);
};
</script>