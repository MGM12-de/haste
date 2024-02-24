<script setup lang="ts">
const client = useSupabaseClient()
const user = useSupabaseUser()
const state = reactive({
  title: ref(''),
  teamAdmin: user.value?.id,
})

async function onCreate() {
  client.from('teams').upsert(state).then(() => {
    navigateTo('/teams')
  })
}
</script>

<template>
  <UForm :state="state" class="space-y-4" @submit="onCreate()">
    <UFormGroup label="Name" name="title">
      <UInput v-model="state.title" />
    </UFormGroup>
    <UButton type="submit" label="Create Team" />
  </UForm>
</template>
