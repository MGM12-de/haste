<template>
    <UTable :rows="games" :loading="pending">
        <template #empty-state>
            <div class="flex flex-col items-center justify-center py-6 gap-3">
                <span class="italic text-sm">No games found!</span>
                <GameCreateButton />
            </div>
        </template>
    </UTable>
</template>
<script setup lang="ts">
const props = defineProps({
    games: {
        type: Array as PropType<Game[]>,
        required: true,
    },
});
const { games } = props;
</script>