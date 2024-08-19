<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/fruits">Fruits</router-link> 
    <div v-if="!$cookies.get('token')">
      |
      <router-link to="/login">Login</router-link>
    </div>
    <div v-else>
      <button @click="logout()">Log Out</button>
    </div>
  </nav>
  <router-view/>
</template>
<script>
export default{
  methods:{
    logout(){
      !$cookies.remove('token')
      location.reload()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
