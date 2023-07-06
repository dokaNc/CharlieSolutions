<template>
    <div class="input-group">
        <input
            type="text"
            class="form-control"
            :placeholder="placeholder"
            :aria-label="placeholder"
            :id="genericId"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <i v-if="search" class="fa-solid fa-magnifying-glass"></i>
    </div>
</template>

<script setup>
import { computed } from "vue";

defineProps({
    width: String,
    placeholder: String,
    modelValue: {
        type: String,
    },
    search: Boolean,
});

const genericId = computed(() => {
    return "input-" + Math.floor(Math.random() * Date.now()).toString(10);
});
</script>

<style scoped lang="scss">
.input-group {
    .form-control {
        font-size: 0.8rem;
        border-radius: unset;
    }

    i {
        position: absolute;
        right: 0;
        padding: 0.675rem 0.75rem;
    }
}
</style>
