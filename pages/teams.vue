<template>
    <UPage>
        <UPageHeader title="Teams" />
        <UPageBody>

            <UTable :rows="teams" :loading="loading" />

        </UPageBody>
    </UPage>
</template>

<script setup lang="ts">
import type { Team } from '~/types';
const supabase = useSupabaseClient();
var teams: Team[] = [];
var loading = true;

supabase.from('teams').select('*').then(({ data, error }) => {
    if (error) {
        useToast().add({ title: 'Teams read failed', description: error.message })
        console.log(error);
    } else {
        if (data.length > 0) {
            teams = data;
        }
    }
    loading = false;
});


</script>