<template>
    <div class="w-screen h-screen">
        <div>
            <appHeader />
        </div>
        <UNotifications />
        <div class="w-auto h-auto ml-10 mr-10">
            <slot />
        </div>
        <div class="fixed bottom-0 w-full">
            <appFooter />
        </div>
    </div>
</template>