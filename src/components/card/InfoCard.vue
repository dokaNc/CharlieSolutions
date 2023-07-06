<template>
    <div class="content-card" :style="{ 'background-color': bgColor }">
        <div class="total" :style="{ color: txtColor }">
            {{ total }}
        </div>
        <div class="content" :style="{ color: txtColor }">
            {{ content }}
        </div>
    </div>
</template>

<script setup>
defineProps({
    total: String || Number,
    content: String,
    bgColor: {
        type: String,
        default: "#fff",
    },
    txtColor: {
        type: String,
        default: "#2c3e50",
    },
});
</script>

<style scoped lang="scss">
.content-card {
    background: #fff;
    width: 250px;
    padding: 2.5rem 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    &:hover {
        opacity: 0.9;
    }

    .total {
        font-size: 2rem;
        font-weight: bold;
    }

    .content {
        font-size: 0.8rem;
    }
}
</style>
