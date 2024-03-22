<script setup lang="ts">
const client = useSupabaseClient()
const supabase = useSupabaseClient()

const state = reactive({
  homeTeam: ref(''),
  awayTeam: ref(''),
})

const { data: leagueTeams } = await useAsyncData(`league`, async () => {
  const { data } = await supabase.from('teams').select('*')
  return data
})

async function onCreate() {
  client.from('games').upsert(state).then(() => {
    navigateTo('/games')
  })
}
</script>

<template>
  <UForm :state="state" class="space-y-4" @submit="onCreate()">
    <UFormGroup label="Home team" name="homeTeam">
      <UInputMenu
        v-model="state.homeTeam" :options="leagueTeams"
        value-attribute="id"
        option-attribute="title"
      />
    </UFormGroup>
    <UFormGroup label="Away team" name="awayTeam">
      <UInputMenu
        v-model="state.awayTeam" :options="leagueTeams"
        value-attribute="id"
        option-attribute="title"
      />
    </UFormGroup>
    <UButton type="submit" label="Create Game" />
  </UForm>
</template>
