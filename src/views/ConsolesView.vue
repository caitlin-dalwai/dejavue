<template lang="">
    <div>
        <h1>Console</h1>
    </div>
    <div>
        <section v-for="console in consoles" :key="console" class="cons">
            <card-comp>
                <template #name>
                    <h1>{{console.name}}</h1>
                </template>
                <template #manufacturer>
                    <h5>{{console.manufacturer}}</h5>
                </template>
                <template #release_year>
                    <h5>{{console.release_year}}</h5>
                </template>
                <template #storage>
                    <h5>{{console.storage}}</h5>
                </template>
                <template #price>
                    <h5>R{{console.price}}</h5>
                </template>
                <template #best_selling_game>
                    <h5>{{console.best_selling_game}}</h5>
                </template>
            </card-comp>
        </section>
    </div>
</template>
<script>
import CardComp from '../components/CardComp.vue'
export default {
    data() {
        return {
            consoles:[
        {
            "name": "PlayStation 5",
            "manufacturer": "Sony",
            "release_year": 2020,
            "storage": "825GB SSD",
            "price": 499,
            "best_selling_game": "Spider-Man: Miles Morales"
        },
        {
            "name": "Xbox Series X",
            "manufacturer": "Microsoft",
            "release_year": 2020,
            "storage": "1TB SSD",
            "price": 499,
            "best_selling_game": "Halo Infinite"
        },
        {
            "name": "Nintendo Switch",
            "manufacturer": "Nintendo",
            "release_year": 2017,
            "storage": "32GB",
            "price": 299,
            "best_selling_game": "Mario Kart 8 Deluxe"
        },
        {
            "name": "Steam Deck",
            "manufacturer": "Valve",
            "release_year": 2022,
            "storage": "64GB eMMC",
            "price": 399,
            "best_selling_game": "Elden Ring"
        },
        {
            "name": "PlayStation 4 Pro",
            "manufacturer": "Sony",
            "release_year": 2016,
            "storage": "1TB HDD",
            "price": 399,
            "best_selling_game": "God of War (2018)"
        }
    ],
        }
    },
    components: {
        CardComp
    }
}
</script>
<style scoped>
.cons{
    border: solid 5px rgb(64, 134, 148);
    margin-top: 1%;
    width: 50%;
    margin-left: 25%;
}
</style>