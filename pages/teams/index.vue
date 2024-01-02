<template>
    <UPage>
        <UPageHeader title="Teams" />
        <UPageBody>
            <TeamTable :teams="teams" :pending="pending" />
            <div class="mt-4 float-right">
                <TeamCreateButton v-if="!teams" />
            </div>

        </UPageBody>
    </UPage>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();



const { data, pending, error, refresh } = await useFetch('/api/teams');
const teams = data.value.teams;

</script>