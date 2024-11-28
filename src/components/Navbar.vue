<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Navbar',
    setup(){

    }
})
</script>

<template>
    <nav>
        <div class="nav-items">
            <h2>Klipp & Klang</h2>
        </div>
        <div class="nav-items">
            <a href="/">Hem</a>
            <a href="/booking">Bokningar</a>
        </div>
    </nav>
</template>

<style scoped>
    nav{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--primary-color);
    }
.nav-items{
    padding: 0 2rem;
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
}

</style>