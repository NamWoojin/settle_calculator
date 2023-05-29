<template>
    <div class="background">
        <slot/>
    </div>
</template>
<style scoped>
.background{
    min-width:540px;
    padding:16px;
    background-color: rgba(255, 210, 196, 0.288);
    border-radius: 16px;
    display: flex;
    justify-content: center;
}
</style>