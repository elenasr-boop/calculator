<template>
    <div class="screen"> {{ expression }} </div>
</template>

<script>
export default {
    computed: {
        expression() {
            return this.$store.state.expression;
        },
    },
}
</script>

<style scoped>
.screen {
    background-color: rgba(75, 75, 255, 0.3);
    height: 70px;
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>