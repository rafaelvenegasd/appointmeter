<template>
  <div>
    <div class="img-searcher-container d-flex justify-content-center">
      <div class="d-flex justify-content-center align-items-center flex-column container">
        <div class="searcher-container">
          <div class="d-flex justify-content-center align-items-center flex-column container mb-3">
            <img alt="Lookhaus logo" src="../assets/images/logos/black-small.png" class="logo mb-2 pt-3">
            <span>Find the perfect place</span>
          </div>
          <div class="d-flex justify-content-center align-items-center flex-column container">
            <div>
                <input type="radio" name="place" id="homes" class="mr-2 btn-radio" v-model="item_selected" value="homes"><label for="homes" class="mr-3">Place to live</label>
                <input type="radio" name="place" id="offices" class="mr-2 btn-radio" v-model="item_selected" value="offices"><label for="offices">Place to work / Office</label>
            </div>
          </div>
          <div id="searcher" class="d-flex justify-content-center align-items-center flex-column container mb-4">
              <!-- <input type="text" placeholder="Type city, town, etc." class="col-form-label-sm" v-model="message"> -->
              <router-link tag="li" :to="item_selected" exact>
                <input type="submit" value="Search" class="btn mt-2" v-on:click="search()">
              </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <ul class="row mt-4 mb-5 d-flex justify-content-between">
        <li><img src="../assets/images/small-figures/home.png" alt="small-image" class="small-figure mr-3"><span>Find places to work and places to live</span></li> 
        <li><img src="../assets/images/small-figures/filter.png" alt="small-image" class="small-figure mr-3"><span>Fully customisable with loads of filters</span></li>
        <li><img src="../assets/images/small-figures/website.png" alt="small-image" class="small-figure mr-3"><span>Moderated by Lookhaus experts</span></li>
      </ul> 
      <div class="d-flex justify-content-center align-items-center container mt-5 mb-4 container">
        <figure class="mr-4">
          <img src="../assets/images/img.jpg" width="200px" alt="lookhaus-image">
        </figure>
        <div class="box-content">
          <div class="logo-h mb-4">
            <img src="../assets/images/logos/black.png" alt="logo" class="logo pt-3">
            <small>Where your future home is</small>
          </div>
          <p class="mb-4">Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.</p>
          <div class="d-flex">
            <router-link tag="li" to="/sign-up" exact>
              <input type="submit" class="btn mr-2" value="Create your account">
            </router-link>
            <router-link tag="li" to="/log-in" exact>
              <input type="submit" class="btn" value="Log in to an existent account">
            </router-link>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import EventBus from '../../event-bus'
import {getProperties} from '../../axios-service'

export default {
  name: 'Home',
  data() {
      return {
          message: '',
          item_selected: ''  
      }
    },
    methods:{
        search(){
          getProperties(this.item_selected, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    EventBus.$emit('searching', data);
                }
            })
        }
    }
}
</script>

