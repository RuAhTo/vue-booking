<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Carousel from '../components/Carousel.vue';
import BookingForm from '../components/BookingForm.vue';

export default defineComponent({
    name: 'BookingPage',
    components: {
        Navbar,
        Footer,
        Carousel,
        BookingForm,
    }
});
</script>

<template>
    <header>
        <Navbar/>
    </header>
    <main>
        <BookingForm/>
    </main>
    <Footer/>
</template>