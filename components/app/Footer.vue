<script setup>
const links = [{
  label: 'About',
  icon: 'i-mdi-book-open',
  to: '/about',
}, {
  label: 'Imprint',
  icon: 'i-mdi-information',
  to: '/imprint',
}]
</script>

<template>
  <UFooter :links="links">
    <template #left>
      Copyright © 2023 - {{ new Date().getFullYear() }}
    </template>

    <template #right>
      <UButton icon="i-mdi-github" color="gray" variant="ghost" to="https://github.com/miggi92" target="_blank" />
    </template>
  </UFooter>
</template>
