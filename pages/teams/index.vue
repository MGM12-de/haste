<script setup lang="ts">
const client = useSupabaseClient()

const { data, pending, error, refresh } = await useAsyncData(`teams`, async () => {
  const { data } = await client.from('teams').select('*')
  return data
})
const teams = data.value
</script>

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
