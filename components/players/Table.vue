<script setup lang="ts">
const props = defineProps({
  players: {
    type: Object,
    required: true,
  },
})
const { players } = props

const columns = [{
  key: 'number',
  label: 'Number',
  sortable: true,
}, {
  key: 'firstName',
  label: 'First name',
  sortable: true,
}, {
  key: 'name',
  label: 'Last name',
  sortable: true,
}]
</script>

<template>
  <UTable :rows="players" :columns="columns" />
</template>
