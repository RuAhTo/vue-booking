<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
    name: 'Footer',
    setup() {

        const items = ref([
        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Carrot', category: 'Vegetable' },
        { id: 3, name: 'Banana', category: 'Fruit' }
        ]);


        const filterCategory = ref<string>('Fruit');

        const filteredItems = computed(() => {
            return items.value.filter(item => item.category === filterCategory.value);
        });

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