<template>
    <NavigationBlock />
    <NavigationTop />
    <main>
        <router-view />
    </main>
</template>

<script setup>
import NavigationBlock from "../src/components/navigation/NavigationBlock";
import NavigationTop from "../src/components/navigation/NavigationTop";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

#app {
    font-family: "Poppins", sans-serif, Arial, sans-serif;
    color: $first-grey;
    background: $fourth-grey;
    height: 100vh;
    font-size: 0.9rem;
}

main {
    margin-left: 330px;
}
</style>
