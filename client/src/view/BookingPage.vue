<script lang="ts">
import { defineComponent } from 'vue';
import Calendar from '../components/Calendar.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
    name: 'BookingPage',
    components: {
        Calendar,
        Navbar,
        Footer
    }
});
</script>

<template>
    <header>
        <Navbar/>
    </header>
    <main>
        <Calendar/>
    </main>
    <Footer/>
</template>

<style scoped>
    main{
        width: 100%;
        display: flex;
        align-items: center;
        height: 100vh;
        flex-direction: column;
    }
</style>