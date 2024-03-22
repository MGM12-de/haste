<script setup lang="ts">
import { format } from 'date-fns'

const client = useSupabaseClient()
const supabase = useSupabaseClient()

const state = reactive({
  homeTeam: ref(''),
  awayTeam: ref(''),
  gameTime: ref(new Date()),
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
    <UFormGroup label="Game Time" name="gameTime">
      <UPopover :popper="{ placement: 'bottom-start' }">
        <UButton icon="i-mdi-calendar" :label="format(state.gameTime, 'dd.MM.yyyy')" />

        <template #panel="{ close }">
          <DatePicker v-model="state.gameTime" @close="close" />
        </template>
      </UPopover>
    </UFormGroup>
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
