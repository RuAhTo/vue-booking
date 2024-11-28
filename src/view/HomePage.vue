<script lang="ts">
import Navbar from '../components/Navbar.vue';
    export default{
        name: 'HomePage',
        components: {
            Navbar,
        }
    }
</script>

<template>
    <header>
        <Navbar/>
    </header>
    <main>
        <div class="hero">
            <a class="book-btn" href="/booking">Boka här</a>
        </div>
    </main> 
</template>

<style scoped>
.hero {
    width: 100%;
    background-image: url('/hero-klipp.jpg'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}

.book-btn{
    background-color: var(--primary-color);
    text-decoration: none;
    color: black;
    padding: 2rem;
    width: 8rem;
    text-align: center;
    border-radius: 1rem;
    font-weight: 100;
    font-size: x-large;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.book-btn:hover{
    
}

</style>