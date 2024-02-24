<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const userData = user.value

const { data } = await useAsyncData('user', async () => {
  const { data } = await supabase.from('profiles').select('*').eq('id', userData?.id).single()
  return data
})
const userAvatar = data.value?.avatar_url
</script>

<template>
  <UAvatar :src="userAvatar" :alt="userData?.email" />
</template>
