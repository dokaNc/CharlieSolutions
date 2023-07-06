<template>
    <div class="hello">
        <button
            type="button"
            class="btn btn-primary position-relative"
            @click="onClick"
        >
            +
            <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
                {{ count }}
                <span class="visually-hidden">unread messages</span>
            </span>
        </button>
    </div>
</template>

<script setup>
defineProps({
    count: Number,
    onClick: Function,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
