<template>
    <button
        type="button"
        class="btn d-flex align-items-center gap-2"
        :class="classes"
    >
        <i class="fa-solid" v-if="iconClass" :class="iconClass"></i>
        <span v-if="content">{{ content }}</span>
    </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    content: String,
    blue: {
        type: Boolean,
        default: true,
    },
    red: Boolean,
    iconClass: String,
});

const classes = computed(() => {
    return {
        "btn-blue": props.blue,
        "btn-red": props.red,
    };
});
</script>

<style scoped lang="scss">
button {
    font-size: 0.8rem;
    color: #fff !important;
    border-radius: unset;
    transition: 200ms ease-out;

    &.btn-blue {
        background: $first-blue;

        &:active {
            background-color: $first-blue;
        }
    }

    &.btn-red {
        background: $first-red;

        &:active {
            background-color: $first-red;
        }
    }

    &:hover {
        opacity: 0.9;
        transition: 200ms ease-in;
    }
}
</style>
