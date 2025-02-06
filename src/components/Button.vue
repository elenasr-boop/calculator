<template>
    <button class="button" @click="handleClick">
        {{ symbol }}
    </button>
</template>

<script>
export default {
    props: {
        symbol: {
            type: String,
            required: true,
        },
    },
    methods: {
        handleClick() {
            this.$emit('button-click', this.symbol);
        },
    },
};
</script>

<style>
</style>