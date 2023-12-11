<template>
    <UPage>
        <UPageHeader title="Teams" />
        <UPageBody>

            <UTable :columns="columns" :rows="teams" :loading="pending" @select="rowClick">
                <template #empty-state>
                    <div class="flex flex-col items-center justify-center py-6 gap-3">
                        <span class="italic text-sm">No team found!</span>
                        <UButton label="Add Team" @click="addTeam()" />
                    </div>
                </template>
            </UTable>
            <div class="mt-4 float-right">
                <UButton label="Add Team" v-if="teams" @click="addTeam()" />
            </div>

        </UPageBody>
    </UPage>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const columns = [{ key: 'title', label: 'Name' }];

const { pending, data: teams } = await useAsyncData('teams', async () => {
    const { data } = await supabase.from('teams').select('*');
    return data
});

const rowClick = (row: any) => {
    navigateTo(`/team/${row.id}`);
};

const addTeam = () => {
    navigateTo('/team/create');
};

</script>