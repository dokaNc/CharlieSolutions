<template>
    <router-link to="/" custom v-slot="{ navigate }">
        <div
            class="user-badge d-flex align-items-center gap-2"
            @click="navigate"
        >
            <img src="../../assets/img/avatar.png" alt="avatar" />
            <div>{{ username }}</div>
        </div>
    </router-link>
</template>

<script setup>
defineProps({
    username: String,
});
</script>

<style scoped lang="scss">
.user-badge {
    cursor: pointer;
    color: #000;
    font-weight: 500;

    img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        object-fit: cover;
    }
}
</style>
