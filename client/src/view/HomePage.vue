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
            <div class="welcome-container">
                <h1>Välkommen till Klipp & Klang!</h1>
                <p class="slogan">Där stil möter harmoni – din skönhet, vårt fokus.</p>
                <a class="book-btn" href="/booking">Boka här</a>
            </div>
        </div>
    </main> 
    <Footer/>
</template>

<style scoped>
    main{
        width: 100%;
        display: flex;
        height: 100vh;
    }
.hero {
    width: 100%;
    background-image: url('/hero-klipp.jpg'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-evenly;
    align-items: end;
    flex-direction: column;
    color:black
}
.hero div{
    padding: 2rem;
    text-align: center;
    height: 100%;
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
    margin: 2rem;
}

.book-btn:hover{
    background-color: var(--hover-color);
    transform: scale(1.05);
    font-weight: 400;
}

.welcome-container{
    background-color: rgb(255, 255, 255);
    height: 100%;
    width: 30%;
}

</style>