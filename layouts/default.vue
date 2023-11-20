<template>
    <div class="w-screen h-screen">
        <div>
            <appHeader />
        </div>
        <div>
            <slot />
        </div>
        <div class="fixed bottom-0 w-full">
            <appFooter />
        </div>
    </div>
</template>