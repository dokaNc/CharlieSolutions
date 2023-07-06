<template>
    <input
        class="form-check-input"
        type="checkbox"
        :id="genericId"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script setup>
import { computed } from "vue";

defineProps({
    modelValue: [String, Array, Object],
});

const genericId = computed(() => {
    return "input-" + Math.floor(Math.random() * Date.now()).toString(10);
});
</script>

<style scoped lang="scss">
input {
    border-radius: unset !important;
}
</style>
