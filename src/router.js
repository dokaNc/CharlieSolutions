import { createRouter, createWebHistory } from "vue-router";
import Home from "../src/views/HomeView.vue";
import Materiel from "../src/views/MaterielView.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/dashboard",
            component: Materiel,
        },
        {
            path: "/materiel",
            component: Materiel,
            children: [
                {
                    path: "groupe",
                    component: Materiel,
                },
                {
                    path: "type",
                    component: Materiel,
                },
                {
                    path: "etat",
                    component: Materiel,
                },
                {
                    path: "capteur",
                    component: Materiel,
                },
            ],
        },
        {
            path: "/zone",
            component: Home,
            children: [
                {
                    path: ":id",
                    component: Home,
                },
            ],
        },
        {
            path: "/entreprise",
            component: Home,
            children: [
                {
                    path: ":id",
                    component: Home,
                },
            ],
        },
        {
            path: "/historique",
            component: Home,
        },
        {
            path: "/alerte",
            component: Home,
            children: [
                {
                    path: ":id",
                    component: Home,
                },
            ],
        },
        {
            path: "/guide",
            component: Home,
        },
    ],
});
