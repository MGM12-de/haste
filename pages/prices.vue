<template>
    <UPage>
        <UPageHeader title="Prices" description="Choose the plan that fits your needs." icon="i-heroicons-user" />

        <UPageBody>
            <UPricingGrid :compact="false">
                <UPricingCard v-for="(price, index) in prices" :key="index" :title="price.title"
                    :description="price.description" :price="price.price" :badge="price.badge" :button="price.button"
                    :features="price.features" align="bottom" />
            </UPricingGrid>

        </UPageBody>
    </UPage>
</template>


<script setup lang="ts">
const prices = [{ title: 'Solo', description: 'Not fixed yet', price: '199 €', badge: { label: 'Most popular' }, button: { label: 'Buy now' }, features: ['Test1', 'Test2'] },
{ title: 'Team', description: 'Not fixed yet', price: '199 €', button: { label: 'Buy now' }, features: ['Test1', 'Test2'] }]
</script>