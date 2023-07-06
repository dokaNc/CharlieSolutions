<template>
    <div class="block vh-100 position-fixed">
        <img
            class="w-100"
            src="@/assets/img/logo.png"
            alt="logo charlie solutions"
        />
        <nav class="navbar p-0 d-flex flex-column align-items-start">
            <ul class="navbar-nav w-100">
                <NavigationItem
                    v-for="(item, id) in items"
                    :key="id"
                    :node="item"
                />

                <li>
                    <router-link class="nav-link fixed-bottom" to="/guide">
                        <div>
                            <i class="fa-solid fa-circle-question"></i>
                            Guide
                        </div>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { ref } from "vue";
import NavigationItem from "./NavigationItem";

const items = ref([
    {
        name: "Vue d'ensemble",
        path: "/",
        icon: "fa-solid fa-eye",
        color: "#389f33",
    },
    {
        name: "Tableau de bord",
        path: "/dashboard",
        icon: "fa-solid fa-vector-square",
        color: "#1071b8",
    },
    {
        name: "Matériel",
        path: "/materiel",
        icon: "fa-solid fa-gavel",
        color: "#fff",
        subItem: [
            {
                name: "Groupe",
                path: "/materiel/groupe",
                icon: "fa-solid fa-circle",
            },
            {
                name: "Type",
                path: "/materiel/type",
                icon: "fa-solid fa-circle",
            },
            {
                name: "État",
                path: "/materiel/etat",
                icon: "fa-solid fa-circle",
            },
            {
                name: "Capteur",
                path: "/materiel/capteur",
                icon: "fa-solid fa-circle",
            },
        ],
    },
    {
        name: "Zone",
        path: "/zone",
        icon: "fa-solid fa-house",
        color: "#fff",
        subItem: [
            {
                name: "Zone 1",
                path: "/zone/1",
                icon: "fa-solid fa-circle",
            },
        ],
    },
    {
        name: "Gestion d'entreprise",
        path: "/entreprise",
        icon: "fa-solid fa-gear",
        color: "#fff",
        subItem: [
            {
                name: "Gestion 1",
                path: "/entreprise/1",
                icon: "fa-solid fa-circle",
            },
        ],
    },
    {
        name: "Historique",
        path: "/historique",
        icon: "fa-solid fa-clock-rotate-left",
        color: "#fff",
    },
    {
        name: "Alerte",
        path: "/alerte",
        icon: "fa-solid fa-bell",
        color: "#fff",
        subItem: [
            {
                name: "Alerte 1",
                path: "/alerte/1",
                icon: "fa-solid fa-circle",
            },
        ],
    },
]);
</script>

<style scoped lang="scss">
.block {
    width: 330px;
    background-color: $first-grey;
    min-height: 100%;

    img {
        padding: 1.6rem 6rem;
        background: $first-red;
    }

    a {
        list-style: none;
        color: #fff;
        padding: 1.5rem 2rem;
        width: 330px;

        i {
            margin-right: 0.8rem;
            font-size: 1.4rem;
        }

        &.router-link-exact-active {
            font-weight: 600;
            background: linear-gradient(
                90deg,
                rgba(221, 75, 57, 1) 1.5%,
                rgba(55, 55, 54, 1) 1.5%
            );
            transition: 200ms ease-in;
        }
    }
}
</style>
