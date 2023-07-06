<template>
    <div class="block-card" :style="{ width: width, height: height }">
        <slot name="content"></slot>
    </div>
</template>

<script setup>
defineProps({
    width: String,
    height: String,
});
</script>

<style scoped lang="scss">
.block-card {
    background: #fff;
    padding: 1.5rem;
}
</style>
