<script lang="ts" setup>
useSchemaOrg([
  defineOrganization({
    name: 'MGM12',
  }),
  defineWebSite({
    name: 'mgm12.dev',
  }),
  defineWebPage(),
])
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="sticky w-full top-0 z-50">
      <appHeader />
    </div>
    <UNotifications />
    <div class="flex-grow ml-10 mr-10">
      <UContainer>
        <slot />
      </UContainer>
    </div>

    <div
      class="sticky bottom-0 w-full z-50 bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px"
    >
      <appFooter />
    </div>
  </div>
</template>
