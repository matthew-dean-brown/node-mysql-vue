<template>
    <h1>Fruits hehe</h1>
    <div>
        <section v-for="fruit in $store.state.fruits" :key="fruit.id">
            {{ fruit.id  }}
            {{ fruit.fruit_name }}
            {{ fruit.weight }}
            {{ fruit.amount }}
            <button v-if="$cookies.get('token')" @click="addToCart(fruit.id)">Purchase</button>
        </section>
    </div>
</template>

<script>
export default{
    methods:{
        getFruits(){
        this.$store.dispatch('getFruits')
      },
      addToCart(fruit_id){
        this.$store.dispatch('addToCart',fruit_id)
      }
    },
    mounted(){
        this.getFruits()
    }
}
</script>