<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'BookingForm',

    setup() {
        
    },
});
</script>

<template>
    <div class="booking-form-container">
        <form action="submit">
            <h2 class="accent-header">Boka tid</h2>
            <div>
                <ul>
                    <li>10:00</li>
                    <li>11:00</li>
                    <li>10:00</li>
                    <li>11:00</li>
                </ul>
            </div>
            <div class="input-row">
                <label for="name">
                    Förnamn <span class="field-star" aria-hidden="true">*</span>
                </label>
                <input type="name" id="firstname-input" placeholder="Förnamn" aria-describedby="firstNameHint" aria-required="true" >
                <span id="firstNameHint">Skriv ditt förnamn här.</span>
            </div>
            <div class="input-row">
                <label for="name">
                    Efternamn <span class="field-star" aria-hidden="true">*</span>
                </label>
                <input type="name" id="lastname-input" placeholder="Efternamn" aria-describedby="lastNameHint" aria-required="true" >
                <span id="lastNameHint">Skriv ditt efternamn här.</span>
            </div>
            <div class="input-row">
                <label for="email">
                    Email <span class="field-star" aria-hidden="true">*</span>
                </label>
                <input type="email" id="email-input" placeholder="namn@exempel.com" aria-describedby="emailHint" aria-required="true" >
                <span id="emailHint">Skriv din mailadress här. Skriv i formatet: xxxx@xxxx.xxx</span>
            </div>
            <button type="submit">Boka</button>
        </form>
    </div>
</template>

<style scoped>
.booking-form-container{
    display: flex;
    height: min-content;
    border: 1px solid rgb(203, 203, 203);
    border-radius: 1rem;
    width: 25%;
    margin-top: 2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.accent-header{
    color: var(--primary-color);
}
form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.input-row{
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    }

span{
    color: rgb(97, 97, 97);
    font-size: smaller;
}
.field-star{
    color: red;
    font-size: larger;
}


input{
    padding: .4rem;
    width: 100%;
    margin: .4rem 0;
}
button{
    background: none;
    border: 1px solid black;
    padding: 1rem;
    border-radius: 1rem;


    margin: 2rem;
}
</style>