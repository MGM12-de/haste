<template>
    <UContainer>
        <TeamAssignedUser :team="team" />
        <br />
        <TeamPlayers :team="team" />
    </UContainer>
</template>

<script setup lang="ts">
const props = defineProps({
    team: {
        type: Object,
        required: true,
    },
});
const { team } = props;
</script>