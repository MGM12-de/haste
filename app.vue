<script setup lang="ts">
const { $pwa } = useNuxtApp()
const toast = useToast()

onMounted(() => {
  if ($pwa.offlineReady)
    toast.add({ title: 'Offline rdy', description: 'App ready to work offline' })
  if ($pwa.needsRefresh) {
    toast.add({
      title: 'New version',
      description: 'New version available, please refresh',
      actions: [{
        label: 'Refresh',
        click: () => $pwa.updateServiceWorker(),
      }],
    })
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <VitePwaManifest />
    <NuxtPage />
  </NuxtLayout>
</template>
