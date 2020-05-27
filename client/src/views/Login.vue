<template>
  <div class="container ">
    <div class="d-flex justify-content-between "> 
      <div class="content-big-box">
      <div class="content-big-box">
        <h4>Don´t have an accout yet?</h4>
        <p>Join the community of ownwers and enjoy a fully equiped
          platform to post your properties!
        </p>
        <div class="d-flex">
          <div class="w-50">
            <router-link tag="li" to="/sign-up" exact>
              <input type="submit" class="btn" value="Create an account">
            </router-link>
          </div>
        </div>

      </div>
      </div>
      <div class="content-big-box">
      <div class="content-big-box">
        <form action="" class="d-flex flex-column container mb-3">
          <h4 class="mb-4">Log in to your account </h4>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Email</span>
            </div>
            <input type="email" class="form-control" v-model="email" placeholder="Type your email" aria-label="Email" aria-describedby="basic-addon1" required>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Password</span>
            </div>
            <input type="password" class="form-control" v-model="password" placeholder="Type your password" aria-label="Email" aria-describedby="basic-addon1" required>
          </div>
          <!-- <div class="d-flex justify-content-center align-items-center flex-column container">
            <div>
              <input type="radio" name="place" id="live" class="mr-2 btn-radio" v-model="user" value="admin"><label for="place" class="mr-3">Admin</label>
              <input type="radio" name="place" id="work" class="mr-2 btn-radio" v-model="user" value="user"><label for="place">Regular User</label>
            </div>
          </div> -->
          <input type="submit" value="Log in to an existent account" v-on:click="login()">
        </form>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import {loginUser} from '../../axios-service'
import EventBus from '../../event-bus'

export default {
  name: 'Login',
    data() {
      return {
          email: '',   
          password: '', 
          needLogin: true,
          params: {}
      }
    },
    methods:{
        login(){
          this.params = {
            "email": this.email, 
            "password": this.password, 
          }
          event.preventDefault()
          loginUser(this.params, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    localStorage.setItem('access_token', JSON.stringify(data.id_token));
                    localStorage.setItem('properties', JSON.stringify(data.property_ids));
                    EventBus.$emit('username', data.user);
                    this.$router.replace({ name: "Home" });
                }
            })
        }
    }
}
</script>