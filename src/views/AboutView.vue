<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getFruits()">Get Fruits</button>
  </div>
</template>

<script>
  export default {
    methods:{
      getFruits(){
        this.$store.dispatch('getFruits')
      }
    }
  }
</script>
