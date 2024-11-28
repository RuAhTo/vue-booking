<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Calendar',

    setup(){

        const currentDate = new Date();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

        const currentYear = ref<number>(currentDate.getFullYear());
        const currentMonthIndex = ref<number>(currentDate.getMonth());

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
        }

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
            }

        function getMonthName(index:number):string{
            return months[index];
        }

        return{
            currentMonthIndex,
            currentMonth: computed(() => getMonthName(currentMonthIndex.value)),
            handleIncreaseMonth,
            handleDecreaseMonth
            
        }
  }
})
</script>

<template>
    <div class="container">
        <div class="calendar-header">
            <button @click="handleDecreaseMonth"><</button>
            <h2>{{ currentMonth }}</h2>
            <button @click="handleIncreaseMonth()">></button>
        </div>
        <div class="weekday-container">
            <div class="weekday-column">
                <h4>Mån</h4>
                <div class="dates-container">
                </div>
            </div>
            <div class="weekday-column">
                <h4>Tis</h4>
                <div class="dates-container">
                    
                </div>
            </div>
            <div class="weekday-column">
                <h4>Ons</h4>
                <div class="dates-container">
                    
                </div>
            </div>
            <div class="weekday-column">
                <h4>Tor</h4>
                <div class="dates-container">
                </div>
            </div>
            <div class="weekday-column">
                <h4>Fre</h4>
                <div class="dates-container">
                    
                </div>
            </div>
            <div class="weekday-column">
                <h4>Lör</h4>
                <div class="dates-container">
                    
                </div>
            </div>
            <div class="weekday-column">
                <h4>Sön</h4>
                <div class="dates-container">
                    
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
    width: 50%;
    height: min-content;
    border-radius: 1rem;
    border: 2px solid black;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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

</style>