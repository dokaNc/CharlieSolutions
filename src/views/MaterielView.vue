<template>
    <div class="container-fluid materiel">
        <!-- Section Information Global -->
        <div class="d-flex flex-row gap-3 mb-3">
            <InfoCard
                total="26 360 €"
                content="Valeur du matériel"
                bg-color="#1071b8"
                txt-color="#fff"
            />
            <InfoCard total="161" content="Nombre d'équipements" />
            <InfoCard total="80" content="Détectés" />
            <InfoCard total="32" content="Non détectés" />
            <InfoCard total="49" content="A réviser" />
            <InfoCard total="0" content="Perdus" />
        </div>

        <!-- Section Filtre -->
        <BlockCard class="mb-3 filter">
            <template v-slot:content>
                <InputTextFormtItem
                    placeholder="Rechercher une zone"
                    v-model="inputText"
                    :search="true"
                />
                <SelectFormItem
                    selectName="Type de matériel"
                    width="700px"
                    v-model="selectedMateriel"
                    :data="optionList"
                />
                <SelectFormItem
                    selectName="Status"
                    width="700px"
                    v-model="selectedStatus"
                    :data="optionList"
                />
                <SelectFormItem
                    selectName="Site"
                    width="700px"
                    v-model="selectedSite"
                    :data="optionList"
                />
                <SelectFormItem
                    selectName="Etat"
                    width="700px"
                    v-model="selectedEtat"
                    :data="optionList"
                />
                <DefaultButton content="Filtrer" iconClass="fa-filter" />
            </template>
        </BlockCard>

        <!-- Section Table -->
        <BlockCard>
            <template v-slot:content>
                <div class="top-btn d-flex gap-2">
                    <DefaultButton :red="true" iconClass="fa-trash" />
                    <DefaultButton iconClass="fa-share-from-square" />
                    <DefaultButton iconClass="fa-file-invoice" />
                </div>

                <SelectFormItem
                    class="page"
                    defaultValue="10"
                    width="fit-content"
                    v-model="selectedNb"
                    :data="optionNbList"
                />
                <BlockTable :columns="columns" :materiels="filteredMateriels" />
                <DefaultButton
                    iconClass="fa-plus"
                    content="Ajouter des données"
                />
            </template>
        </BlockCard>
    </div>
</template>

<script setup>
import InfoCard from "../components/card/InfoCard";
import BlockCard from "../components/card/BlockCard";
import SelectFormItem from "../components/form/SelectFormItem";
import InputTextFormtItem from "../components/form/InputTextFormtItem";
import DefaultButton from "../components/button/DefaultButton";
import BlockTable from "@/components/table/BlockTable";
import { computed, ref } from "vue";

const inputText = ref("");
const selectedStatus = ref("");
const selectedEtat = ref("");
const selectedSite = ref("");
const selectedMateriel = ref("");
const selectedNb = ref("");

const optionList = ["Option 1", "Option 2"];
const optionNbList = [20, 30, 40, 50];

const columns = [
    "Type de matériel",
    "Bague",
    "Catpeur",
    "Status",
    "Zone actuelle",
    "Détection",
    "Site",
    "Etat",
    "Prochain controle",
];
const materiels = [
    {
        type: "Perceuse",
        bague: 1789,
        capteur: "C ID 1222",
        statut: "Détecté",
        zone: "Charlie Connect",
        dateDetection: "12/06/2023 16h34",
        site: "Chantier",
        etat: "Conforme",
        dateControle: "15/04/2024",
    },
    {
        type: "Marteaux",
        bague: 1456,
        capteur: "C ID 1333",
        statut: "Non détecté",
        zone: "Paris",
        dateDetection: "12/06/2023 16h34",
        site: "Chantier",
        etat: "À reviser",
        dateControle: "15/04/2024",
    },
    {
        type: "Tournevis",
        bague: 1256,
        capteur: "C ID 1444",
        statut: "Non détecté",
        zone: "Lille",
        dateDetection: "12/06/2023 16h34",
        site: "Chantier",
        etat: "Conforme",
        dateControle: "15/04/2024",
    },
    {
        type: "Disqueuse",
        bague: 1654,
        capteur: "C ID 1555",
        statut: "Détecté",
        zone: "Paris",
        dateDetection: "12/06/2023 16h34",
        site: "Chantier",
        etat: "Conforme",
        dateControle: "15/04/2024",
    },
];

const filteredMateriels = computed(() => {
    return materiels.filter((m) => {
        return (
            m.zone.toLowerCase().indexOf(inputText.value.toLowerCase()) != -1
        );
    });
});
</script>

<style scoped lang="scss">
.materiel {
    padding: 2rem;

    .form-check-input {
        margin-left: 1.3rem;
        border-color: $first-grey;
    }

    .block-card {
        &.filter {
            display: flex;
            gap: 0.5rem;
        }

        .page {
            float: right;
        }

        .top-btn {
            float: left;
        }
    }
}
</style>
