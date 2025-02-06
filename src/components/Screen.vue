<template>
    <div class="screen"> 
        <div :class="['expression', { 'has-result': result !== null }]">{{ expression }}</div>
        <div v-if="result !== null" class="result">
            {{ result }}
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        expression() {
            return this.$store.state.expression;
        },
        result() {
            return this.$store.state.result;
        }
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 200%;
}

.has-result {
    color: rgba(255, 255, 255, 0.47);
    font-size: 50%;
}
</style>