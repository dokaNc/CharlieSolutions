<template>
    <table class="table table-striped overflow-table">
        <thead>
            <tr>
                <th scope="col"><CheckboxFormItem class="main-checkbox" /></th>
                <th scope="col" v-for="(column, index) in columns" :key="index">
                    {{ column }}
                    <i class="fa-solid fa-arrow-down-up-across-line"></i>
                </th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(materiel, index) in materiels" :key="index">
                <td scope="row">
                    <CheckboxFormItem
                        :modelValue="materiel.type"
                        v-model:modelValue="checkedValue"
                    />
                </td>
                <td>{{ materiel.type }}</td>
                <td>{{ materiel.bague }}</td>
                <td>{{ materiel.capteur }}</td>
                <td>
                    <CustomBadge :content="materiel.statut" />
                </td>
                <td>{{ materiel.zone }}</td>
                <td>{{ materiel.dateDetection }}</td>
                <td>{{ materiel.site }}</td>
                <td>
                    <CustomBadge :light-grey="true" :content="materiel.etat" />
                </td>
                <td>{{ materiel.dateControle }}</td>
                <td>
                    <div class="gestion">
                        <DefaultButton :red="true" iconClass="fa-trash" />
                        <DefaultButton iconClass="fa-eye" />
                        <DefaultButton iconClass="fa-pen" />
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref } from "vue";
import CheckboxFormItem from "../form/CheckboxFormItem";
import CustomBadge from "../misc/CustomBadge";
import DefaultButton from "../button/DefaultButton";

defineProps({
    columns: [Array, Object],
    materiels: [Array, Object],
});

const checkedValue = ref("");
</script>

<style scoped lang="scss">
.overflow-table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
}
tr {
    border-style: hidden;
    vertical-align: middle;

    td,
    th {
        font-size: 0.8rem;
        padding: 1.3rem;

        input {
            border-color: #979797;
        }

        .main-checkbox {
            border-color: #000;
        }

        .gestion {
            display: flex;
            gap: 0.2rem;
        }
    }

    th {
        font-weight: 600;

        i {
            margin-left: 0.5rem;
        }
    }
}
</style>
