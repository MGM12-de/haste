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

function rowClick(row: any) {
  navigateTo(`/game/${row.id}`)
}
</script>

<template>
  <UTable :rows="games" :loading="pending" @select="rowClick">
    <template #empty-state>
      <div class="flex flex-col items-center justify-center py-6 gap-3">
        <span class="italic text-sm">No games found!</span>
        <GameCreateButton />
      </div>
    </template>
  </UTable>
  <div v-show="games.length !== 0" class="pt-5">
    <GameCreateButton />
  </div>
</template>
