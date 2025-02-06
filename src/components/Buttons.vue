<template>
    <div class="buttons">
        <Button 
            v-for="(symbol, index) in arrayOfButtons" 
            :key="index" 
            :symbol="symbol"
            @button-click="handleClick"
        />
    </div>
</template>

<script>
import Button from "./Button.vue";

export default {
    components: {
        Button,
    },
    data() {
        return {
            arrayOfButtons: ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "/", "c", "0", "=", "*"]
        };
    },
    methods: {
        handleClick(symbol) {
            this.$store.dispatch('pressButton', symbol);
        },
    },
};
</script>

<style lang="css" scoped>
.buttons {
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(4, 1fr);
}
</style>