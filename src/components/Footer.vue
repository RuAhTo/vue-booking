<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Footer',
    setup() {
        

    },
    })
</script>

<template>
    <footer>
        <p>Följ oss på sociala medier!</p>
        <div>
            <a href="">insta</a>
            <a href="">facebook</a>
        </div>
    </footer>
</template>

<style scoped>
    footer{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 2rem;
    }
    footer div{
        display: flex;
        justify-content: space-between;
        gap: 2rem;
    }
</style>