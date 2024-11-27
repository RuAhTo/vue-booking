<script lang="ts">
import { defineComponent } from 'vue';
import Calendar from '../components/Calendar.vue';

export default defineComponent({
    name: 'BookingPage',
    components: {
        Calendar,
    }
});
</script>

<template>
    <header>
        <nav class="navbar">
            <a href="/">Hem</a>
        </nav>
    </header>
    <main>
        <Calendar/>
    </main>
</template>
