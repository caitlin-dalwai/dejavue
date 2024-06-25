<template lang="">
    <div>
        <h1>Cars</h1>
    </div>
    <div>
        <section v-for="car in cars" :key="car" class="car">
            <card-comp>
                <template #make>
                    <h1>{{car.make}}</h1>
                </template>
                <template #model>
                    <h3>{{car.model}}</h3>
                </template>
                <template #year>
                    <h5>{{car.year}}</h5>
                </template>
                <template #color>
                    <h5>{{car.color}}</h5>
                </template>
                <template #price>
                    <h5>R{{car.price}}</h5>
                </template>
            </card-comp>
        </section>

    </div>
</template>
<script>
import CardComp from '../components/CardComp.vue'
export default {
    data(){
        return{
            cars :[
        {"make": "Toyota", "model": "Camry", "year": 2022, "color": "Silver", "price": 25000},
        {"make": "Honda", "model": "Civic", "year": 2023, "color": "Blue", "price": 22000},
        {"make": "Ford", "model": "Mustang", "year": 2021, "color": "Red", "price": 35000},
        {"make": "Chevrolet", "model": "Malibu", "year": 2022, "color": "Black", "price": 27000},
        {"make": "Nissan", "model": "Altima", "year": 2023, "color": "White", "price": 24000},
        {"make": "BMW", "model": "3 Series", "year": 2022, "color": "Gray", "price": 40000},
        {"make": "Mercedes-Benz", "model": "C-Class", "year": 2023, "color": "Silver", "price": 45000},
        {"make": "Audi", "model": "A4", "year": 2021, "color": "Black", "price": 38000},
        {"make": "Hyundai", "model": "Sonata", "year": 2022, "color": "Blue", "price": 26000},
        {"make": "Kia", "model": "Optima", "year": 2023, "color": "Red", "price": 23000}
    ]
    }
},
components:{
    CardComp
}
}
</script>
<style scoped>
    .car{
        border: solid 5px rgb(119, 237, 119);
        margin-top: 1%;
        width: 50%;
        margin-left: 25%;
    }
</style>