<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const userData = user.value;

var userAvatar = "";

await supabase
    .from('profiles')
    .select('id, avatar_url')
    .eq('id', userData?.id)
    .then(({ data, error }) => {
        if (error) {
            console.log(error)
        } else {
            if (data.length > 0) {
                userAvatar = data[0].avatar_url;
            }
        }
    })

</script>

<template>
    <UAvatar :src="userAvatar" :alt="userData?.email" size="2xl" />
</template>