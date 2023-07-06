<template>
    <span class="badge bg-secondary" :class="background">{{ content }}</span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    content: String,
    darkGrey: {
        type: Boolean,
        default: true,
    },
    lightGrey: Boolean,
});

const background = computed(() => {
    return {
        "dark-grey": props.darkGrey,
        "light-grey": props.lightGrey,
    };
});
</script>

<style scoped lang="scss">
.badge {
    border-radius: unset;
    padding: 0.5rem 0.5rem 0.35rem;
    font-weight: 400;

    &.dark-grey {
        background-color: $second-grey !important;
    }

    &.light-grey {
        background-color: $third-grey !important;
    }
}
</style>
