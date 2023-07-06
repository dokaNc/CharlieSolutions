<template>
    <div class="top-nav d-flex flex-row-reverse align-items-center gap-4">
        <UserBadge username="Dogukan" />
        <AlertNotification :onClick="log" :nbNotif="25" />
        <SwitchLanguage />
    </div>
</template>

<script setup>
import UserBadge from "../misc/UserBadge";
import AlertNotification from "../misc/AlertNotification";
import SwitchLanguage from "../misc/SwitchLanguage";

const log = () => {
    console.log("LOG");
};
</script>

<style scoped>
.top-nav {
    margin-left: 330px;
    padding: 1.15rem 3rem;
    background-color: #fff;
}
</style>
