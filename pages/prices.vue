<script setup lang="ts">
const prices = [{ title: 'Solo', description: 'Not fixed yet', price: '199 €', cycle: '/month', badge: { label: 'Most popular' }, button: { label: 'Buy now' }, features: ['Test1', 'Test2'] }, { title: 'Team', description: 'Not fixed yet', price: '199 €', cycle: '/month', button: { label: 'Buy now' }, features: ['Test1', 'Test2'] }]

const stripeClient = await useClientStripe()

async function subscribe() {
  console.log('subscribe', stripeClient)
  // price: price_1OMfJBAe11ci6r9VvEmiDpiz
}
</script>

<template>
  <UPage>
    <UPageHeader title="Prices" description="Choose the plan that fits your needs." icon="i-mdi-account" />

    <UPageBody>
      <UPricingGrid :compact="false">
        <UPricingCard
          v-for="(price, index) in prices" :key="index" :title="price.title" :cycle="price.cycle"
          :description="price.description" :price="price.price" :badge="price.badge"
          :button="{ ...price.button, click: subscribe }" :features="price.features" align="bottom"
        />
      </UPricingGrid>
    </UPageBody>
  </UPage>
</template>
