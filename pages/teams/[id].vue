<script setup lang="ts">
const route = useRoute()
const client = useSupabaseClient()

const { data: team, error } = await useAsyncData(`team/${route.params.id}`, async () => {
  const { data } = await client.from('teams').select('*').eq('id', route.params.id).single()
  return data
})
</script>

<template>
  <UPage>
    <UPageHeader :title="team.title" />
    <UPageBody>
      <TeamDetail :team="team" />
    </UPageBody>
  </UPage>
</template>
