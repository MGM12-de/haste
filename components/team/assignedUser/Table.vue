<template>
    <UTable :rows="data">
    </UTable>
    <div class="float-right">
        <UButton label="Create assignment" @click="createAssignment()" />

    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
const { data } = props;

const createAssignment = () => {
    console.log('createAssignment')
}
</script>