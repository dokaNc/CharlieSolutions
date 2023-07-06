<template>
    <li @click="dropdown = !dropdown">
        <router-link
            class="nav-link d-flex align-items-center"
            :class="{
                'justify-content-between': node.subItem,
            }"
            :to="node.path"
            :style="{ color: node.color }"
        >
            <div>
                <i v-if="node.icon" class="icon" :class="node.icon"></i>
                {{ node.name }}
            </div>
            <i
                v-if="node.subItem"
                class="fa-solid fa-chevron-right"
                :class="{ 'icon-rotate': dropdown }"
            ></i>
        </router-link>
        <ul class="sub-item" v-if="isOpenable && dropdown">
            <NavigationItem
                v-for="(sub, id) in node.subItem"
                :key="id"
                :node="sub"
                @click="dropdown = !dropdown"
            />
        </ul>
    </li>
</template>

<script setup>
import { computed, ref } from "vue";

const dropdown = ref(false);

const props = defineProps({
    node: Object,
});

const isOpenable = computed(() => {
    const { subItem } = props.node;
    return subItem && subItem.length > 0;
});
</script>

<style scoped lang="scss">
ul {
    list-style: none;

    a {
        list-style: none;
        color: #fff;
        padding: 1.5rem 2rem;
        transition: 200ms ease-in;

        &:hover {
            background-color: $fiveth-grey;
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

        .icon {
            margin-right: 0.8rem;
            font-size: 1.4rem;
        }
    }
}

.sub-item {
    transition: 200ms ease-in;
    a {
        padding: 0.6rem 3rem;

        &:hover {
            background-color: unset;
            color: $first-red;
            transition: 100ms ease-in;
        }
    }
    .icon {
        font-size: 0.3rem;
    }

    li > a > div {
        display: flex;
        align-items: center;

        &:hover {
            color: $first-red;
            transition: 100ms ease-in;
        }
    }
}

.fa-chevron-right {
    transition: 100ms ease-in;

    &.icon-rotate {
        transform: rotate(0.25turn);
        transition: 100ms ease-in;
    }
}
</style>
