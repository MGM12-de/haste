<script setup lang="ts">
const route = useRoute()
const supabase = useSupabaseClient()

const { data: game, error } = await useAsyncData(`game`, async () => {
  const { data } = await supabase.from('games').select('*').eq('id', route.params?.id).single()
  return data
})
</script>

<template>
  <UPage>
    <UPageHeader :title="`${game?.homeTeam} vs ${game?.awayTeam}`" />
    <UPageBody />
  </UPage>
</template>
