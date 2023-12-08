<template>
    <UPage>
        <UPageHeader title="Teams" />
        <UPageBody>

            <UTable :rows="teams" />

        </UPageBody>
    </UPage>
</template>

<script setup lang="ts">
import type { Team } from '~/types';

var teams: Team[] = [];
</script>