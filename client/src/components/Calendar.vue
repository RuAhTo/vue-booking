<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import BookingForm from './BookingForm.vue';

export default defineComponent({
    name: 'Calendar',
    components: {
        BookingForm
    },
    setup(){

        //Variables
        const currentDate = new Date();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const weekdays = ["Sun","Mon", "Tue", "Wen", "Thu", "Fri", "Sat"]

        //Ref
        const currentYear = ref<number>(currentDate.getFullYear());
        const currentMonthIndex = ref<number>(currentDate.getMonth());
        const dates = ref<any[]>([]);

        //Get month name
        function getMonthName(index:number):string{
            return months[index];
        }

        // Time generator
        function generateTimes(startHour:number, endHour:number){
        const times = [];
        for (let hour = startHour; hour < endHour; hour++) {
            const time = `${String(hour).padStart(2, '0')}:00`; // Formaterar till "HH:00"
            times.push({ time, booked: false });
        }
        return times;
        }


        //Dates
        function createMonthDates(year: number, month: number) {
        const firstDayOfMonth = new Date(year, month, 1);

        const startingDayOfWeek = firstDayOfMonth.getDay();
        
        const datesInMonth = [];
        
        const previousMonth = month === 0 ? 11 : month - 1;
        const previousMonthYear = month === 0 ? year - 1 : year;
        const daysInPreviousMonth = new Date(previousMonthYear, previousMonth + 1, 0).getDate();
        
        for (let i = 0; i < startingDayOfWeek; i++) {
            const prevMonthDate = new Date(previousMonthYear, previousMonth, daysInPreviousMonth - startingDayOfWeek + i + 1);
            datesInMonth.push({
                date: prevMonthDate.toISOString(),
                day: prevMonthDate.getDate(),
                month: months[prevMonthDate.getMonth()],
                year: prevMonthDate.getFullYear(),
                weekday: weekdays[prevMonthDate.getDay()],
                available: false,
                times: generateTimes(10, 18),
            });
        }
        
        const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
        for (let day = 1; day <= daysInCurrentMonth; day++) {
            const date = new Date(year, month, day);
            datesInMonth.push({
                date: date.toISOString(),
                day: day,
                month: months[month],
                year: year,
                weekday: weekdays[date.getDay()],
                available: true,
                times: generateTimes(10, 18),
            });
        }
        

        const nextMonth = month === 11 ? 0 : month + 1;
        const nextMonthYear = month === 11 ? year + 1 : year;
        let dayCounter = 1;
        
        while (datesInMonth.length % 7 !== 0) {
            const nextMonthDate = new Date(nextMonthYear, nextMonth, dayCounter);
            datesInMonth.push({
                date: nextMonthDate.toISOString(),
                day: dayCounter,
                month: months[nextMonth],
                year: nextMonthYear,
                weekday: weekdays[nextMonthDate.getDay()],
                available: false,
                times: generateTimes(10, 18),
            });
            dayCounter++;
        }
        
        return datesInMonth;
    }

        dates.value = createMonthDates(currentYear.value, currentMonthIndex.value);
        console.log(createMonthDates(currentYear.value, currentMonthIndex.value))

        //Increase the month and year
        function handleIncreaseMonth(): void{
            if (currentMonthIndex.value == 11){
                currentMonthIndex.value = 0;
                currentYear.value += 1;
                console.log('current year:', currentYear.value)
                console.log('current month:',currentMonthIndex.value)
            } else {
                currentMonthIndex.value += 1;
                console.log('current month:',currentMonthIndex.value)
            }
            dates.value = createMonthDates(currentYear.value, currentMonthIndex.value)
        }

        //Decrease the month and year
        function handleDecreaseMonth(): void {
            if (currentMonthIndex.value === 0) {
                currentMonthIndex.value = 11;
                currentYear.value -= 1;
                console.log('current year:', currentYear.value)
                console.log('current month:',currentMonthIndex.value)
            } else {

                currentMonthIndex.value -= 1;
                console.log('current month:',currentMonthIndex.value)
            }

            dates.value = createMonthDates(currentYear.value, currentMonthIndex.value)
        }

        const getWeekday = computed(() => {
          return (date: Date) => weekdays[date.getDay()];
        });


        return{
            currentYear,
            dates,
            currentMonthIndex,
            currentMonth: computed(() => getMonthName(currentMonthIndex.value)),
            handleIncreaseMonth,
            handleDecreaseMonth,
            getWeekday,
            weekdays,
        }
  }
})
</script>

<template>
    <h1>Boka tid</h1>
    <div class="container">
        <div class="calendar-header">
            <button @click="handleDecreaseMonth"><</button>
            <h2>{{ currentMonth }}</h2>
            <h2>{{ currentYear }}</h2>
            <button @click="handleIncreaseMonth()">></button>
        </div>
        <div class="weekday-container">
            <div class="weekday-column" v-for="day in weekdays" :key="day">
                <h4>{{ day }}</h4>
                <div class="dates-container">
                    <div 
                        class="date-wrapper" 
                        v-for="date in dates.filter(d => d.weekday === day)" 
                        :key="date.date"
                    >
                        <div 
                            class="date-btn"
                            :class="{ 'out-of-month': !date.available }"
                        >
                            {{ date.day }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 1rem;
    background-color: var(--primary-color);
    width: 75%;
    height: min-content;
    border-radius: 1rem;
    border: 2px solid black;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    margin-top: 2rem;
}
.calendar-header{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: white;
    width: 100%;
    border-radius: 1rem 1rem 0 0; 
    border-bottom: 2px solid black;
}
.calendar-header button{
    background: none;
    border: none;
    width: 2rem;
}
.calendar-header button:hover{
    transform: scale(1.2);
    cursor: pointer;
}
.weekday-container{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
}
.dates-container{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
}
.date-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
}
.date-btn{
    background-color: white;
    border-radius: .4rem;
    width: 6rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.date-btn:hover{
    background-color: aliceblue;
    cursor: pointer;
    transform: scale(1.05);
}
.date-btn.out-of-month {
    background-color: #f0f0f0;
    color: #888;
    cursor: default;
    transform: none;
}
.date-btn .active{
    border: 2px solid black
}
</style>