<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const userData = user.value;

const { data: userAvatar } = await useAsyncData('userAvatar', async () => {
    const { data } = await supabase.from('profiles').select('id, avatar_url').eq('id', userData?.id).single();
    return data.avatar_url
});

</script>

<template>
    <UAvatar :src="userAvatar" :alt="userData?.email" />
</template>