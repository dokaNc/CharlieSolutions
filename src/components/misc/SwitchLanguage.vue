<template>
    <div class="switch-language">
        <div v-for="(flag, id) in flags" :key="id" @click="switchLangue">
            <div v-if="flag.country === currentCountry">
                <img :src="flag.source" :alt="flag.country" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const currentCountry = ref("fr");

const switchLangue = () => {
    currentCountry.value === "fr"
        ? (currentCountry.value = "uk")
        : (currentCountry.value = "fr");
};

const flags = [
    {
        country: "fr",
        source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png",
    },
    {
        country: "uk",
        source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
    },
];
</script>

<style scoped lang="scss">
.switch-language {
    cursor: pointer;

    img {
        object-fit: cover;
        width: 23px;
        height: 15px;
        border: 2px solid;
        border-radius: 4px;
    }
}
</style>
