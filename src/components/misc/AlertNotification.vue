<template>
    <div class="alert-notification" @click="onClick">
        <i class="fa-regular fa-bell position-absolute"></i>
        <div class="badge position-relative">{{ nbNotif }}</div>
    </div>
</template>

<script setup>
defineProps({
    nbNotif: Number,
    onClick: Function,
});
</script>

<style scoped lang="scss">
.alert-notification {
    cursor: pointer;

    i {
        font-size: 1.5rem;
    }

    .badge {
        color: #fff;
        font-size: 0.6rem;
        background: $first-red;
        padding: 0.2rem 0.4rem;
        border-radius: 10px;
        bottom: 11px;
        left: 12px;
    }
}
</style>
