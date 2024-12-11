<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'Navbar',
    setup() {
        const route = useRoute();
        return { route };
    }
});
</script>

<template>
    <nav>
        <div class="nav-items">
            <h2>Klipp & Klang</h2>
        </div>
        <div class="nav-items">
            <ul>
                <router-link
                    class="nav-link"
                    to="/"
                    exact-active-class="active-link"
                >
                    Hem
                </router-link>
            <router-link
                    class="nav-link"
                    to="/booking"
                    exact-active-class="active-link"
                >
                    Bokningar
                </router-link>
                <router-link
                    class="nav-link"
                    to="/gallery"
                    exact-active-class="active-link"
                >
                    Galleri
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
nav {
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary-color);
    color: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;}
.nav-items {
    padding: 0 2rem;
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
}

.nav-link {
    text-decoration: none;
    color: white;
}
.nav-link:hover{
    text-decoration: underline;
}
.active-link {
    text-decoration: underline;
    color: white;
}
</style>
