<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
    name: 'Calendar',

    setup(){

        const year = 2024;
        const month = 12;

        const daysInMonth = ref<Array<{ date:string; available: boolean}>>([])

        const generateDaysInMonth = () => {
            const days = [];
            const date = new Date(year,month, 1);

            const totalDays = new Date(year,month + 1, 0).getDate();

            for (let i = 1; i <= totalDays; i++){
                days.push({
                    date: `${i < 10 ? `0${i}` : i}`,
                    available: i % 2 === 0,
                })
            }

            daysInMonth.value = days;
        }
            // Generera dagar när komponenten är monterad
    onMounted(() => {
      generateDaysInMonth();
    });

    const showTimes = (day: { date: string }) => {
      // Öppna modal med lediga tider för den här dagen
      console.log("Show available times for", day.date);
    };

    return { daysInMonth, showTimes };
  },
})
</script>

<template>
    <div class="month">
        <button class=""><</button>
        <h2>December</h2>
        <button>></button>
    </div>
    <div class="calendar-wrapper">
        <div class="calendar">
            <div 
                v-for="day in daysInMonth" 
                class="date"
                :key="day.date"
                >{{  day.date }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.month{
    display: flex;
    justify-content: center;
    gap: 2rem;
}
.calendar-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
}
.calendar{
    width: 60rem;
    display: flex;
    flex-wrap: wrap;
}
.date{
    padding: 2rem;
    background: var(--primary-color);
    margin: 1rem;
    border-radius: 1rem;
}

.date:hover{
    background-color:var(--hover-color);
    transform: scale(1.1);
    cursor: pointer;
}
</style>