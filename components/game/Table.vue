<script setup lang="ts">
const props = defineProps({
  games: {
    type: Object,
    required: true,
  },
  pending: {
    type: Boolean,
    required: true,
  },
})
const { games, pending } = props
</script>

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
