<template>
  <div class="container ">
    <div class="d-flex justify-content-between "> 
      <div class="content-big-box">
      <div class="content-big-box">
        <h4>Already have an accout?</h4>
        <p>Join the community of ownwers and enjoy a fully equiped
          platform to post your properties!
        </p>
        <div class="d-flex">
          <div class="w-50">
            <router-link tag="li" to="/log-in" exact>
              <input type="submit" class="btn" value="Log in">
            </router-link>
          </div>
        </div>
      </div>
      </div>
      <div class="content-big-box">
      <div class="content-big-box">
        <form action="" class="d-flex flex-column container mb-3">
          <h4 class="mb-4">Create an account </h4>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Name</span>
            </div>
            <input type="text" class="form-control" v-model="name" placeholder="Type your name" aria-label="Name" aria-describedby="basic-addon1" required>
          </div>
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
          <input type="submit" value="Create your account" v-on:click="postData()">
        </form>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import {signupUser} from '../../axios-service'

export default {
  name: 'Signup',
    data() {
      return {
          name: '',
          email: '',   
          password: '', 
          params: {}
      }
    },
    methods:{
        postData(){
          this.params = {
            "username": this.name, 
            "email": this.email, 
            "password": this.password, 
          }

          event.preventDefault()
          signupUser(this.params, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    console.log(this.params);
                }
            })
        }
    }
}
</script>