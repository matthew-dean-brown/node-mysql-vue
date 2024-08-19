<template>
    <button @click="signUp = !signUp">SignUp / Login</button>
  <div v-if="signUp">
      <h1>hehehe Register</h1>
      <table>
        <tr><th><label> Name:</label></th><td><input type="text" v-model="name" ></td></tr>
        <tr><th><label> Surname:</label></th><td><input type="text" v-model="surname"></td></tr>
        <tr><th><label> Age:</label></th><td><input type="text" v-model="age"></td></tr>
        <tr><th><label> Fav Coding language:</label></th><td><input type="text" v-model="fav_coding_lang"></td></tr>
        <tr><th><label> Fav Car:</label></th><td><input type="text" v-model="fav_car"></td></tr>
        <tr><th><label> Eye Color:</label></th><td><input type="text" v-model="eye_color"></td></tr>
        <tr><th><label> Username:</label></th><td><input type="text" v-model="username"></td></tr>
        <tr><th><label> Password:</label></th><td><input type="password" v-model="password"></td></tr>
        <tr><td colspan="2"><input @click="addUser" type="button" value="Enter"></td></tr>
      </table>
  </div>
  <div v-else>
      <h1>hehehe Login</h1>
      <table>
        <tr><th><label> Username:</label></th><td><input type="text" v-model="username"></td></tr>
        <tr><th><label> Password:</label></th><td><input type="password" v-model="password"></td></tr>
        <tr><td colspan="2"><input @click="loginUser" type="button" value="Enter"></td></tr>
      </table>
  </div>

</template>

<script>
export default {
    data() {
        return {
            name: '',
            surname: '',
            age: '',
            fav_coding_lang: '',
            fav_car: '',
            eye_color: '',
            username: '',
            password: '',
            signUp:true
        }
    },
    computed:{
        addUser(){
            this.$store.dispatch('addUser',this.$data)
        },
        loginUser(){
            this.$store.dispatch('loginUser',{username:this.username,password:this.password})
            
        }
    }
}
</script>

<style>
table{
    margin: auto;
}
</style>