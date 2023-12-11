<template>
    <UContainer>
        <TeamAssignedUser :team="team" />
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