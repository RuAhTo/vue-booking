<script lang="ts">
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
    export default{
        name: 'HomePage',
        components: {
            Navbar,
            Footer
        }
    }
</script>

<template>
    <header>
        <Navbar/>
    </header>
    <main>
        <div class="hero">
            <div class="container-glass">
                <h1>Välkommen till Klipp & Klang!</h1>
                <p class="slogan">Där stil möter harmoni – din skönhet, vårt fokus.</p>
            </div>

            <a class="book-btn" href="/booking">Boka här</a>
        </div>
    </main> 
    <Footer/>
</template>

<style scoped>
.hero {
    width: 100%;
    background-image: url('/hero-klipp.jpg'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
}
.hero div{
    padding: 2rem;
    color: white;
    text-align: center;
}
h1{
    font-size: 56px;
}
p{
    font-size: 32px;
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
    background-color: var(--hover-color);
    transform: scale(1.05);
    font-weight: 400;
}

.container-glass{
    background-color: rgba(114, 114, 114, 0.255);
    border-radius: 1rem;
    backdrop-filter: blur(2px);
}

</style>