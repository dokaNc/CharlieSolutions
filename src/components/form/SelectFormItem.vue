<template>
    <select
        class="form-select"
        :aria-label="selectName"
        :style="{ width: width }"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
    >
        <option value="" selected disabled v-if="selectName">
            {{ selectName }}
        </option>
        <option value="" selected v-if="defaultValue">
            {{ defaultValue }}
        </option>
        <option
            v-for="(item, id) in data"
            :key="id"
            :value="item"
            :selected="modelValue === item"
        >
            {{ item }}
        </option>
    </select>
</template>

<script setup>
defineProps({
    width: String,
    selectName: String,
    data: Array || Object,
    modelValue: {
        type: String,
    },
    defaultValue: String,
});
</script>

<style scoped lang="scss">
.form-select {
    font-size: 0.8rem;
    border-radius: unset;
}
</style>
