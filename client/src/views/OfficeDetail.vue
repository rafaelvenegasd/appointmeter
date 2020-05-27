<template>
  <div class="container ">
    <div class="d-flex justify-content-between "> 
      <div class="content-big-box">
          <h4>{{item.name}}</h4>
      <div class="mt-4">          

          <carousel :per-page="1" :navigationEnabled="true" :mouse-drag="false" :autoplay="true" :autoplayTimeout="5000" :loop="true">
            <div v-for="image in item.photos" :key="image.photos">
              <slide>
                <img class="photos" width="800px" src="image">
              </slide>
            </div>
            
            <!-- <slide>
              <img class="photos" width="800px" src="../assets/images/cover2.jpg">
            </slide>
            <slide>
              <img class="photos" width="800px" src="../assets/images/maps.jpg">
            </slide>
            <slide>
              <img class="photos" width="800px" src="../assets/images/img.jpg">
            </slide> -->
          </carousel>
      </div>
      </div>
      <div class="content-big-box">
      <div class="mt-5">
        <div class="ml-3">
            <div class="mb-3">
                <div v-if="item.bargain == true">
                    <button class="btn mt-4 mb-3" disabled >○ Bargain</button>
                </div>
                <h5 class="detail_tittle">{{item.price}} €</h5>
            </div>
            <p class="mb-4 paragraph">{{item.description}}</p>
            <ul class="d-flex justify-content-between">
              <li class="details">Kind: {{item.kind}}</li>
              <li class="details">Floor: {{item.floor}}</li>
              <li class="details">Address: {{item.street}}, {{item.city}}, {{item.postalcode}}</li>
            </ul>
        </div>
    </div>
    </div>
    </div>
    <div class="mt-2 d-flex">
        <div class="mr-4">
            <Maps></Maps>
        </div>
        <div>
            <h5>Details</h5>
            <ul class="mt-4">
                <li class="mt-2"> <b>Seller:</b>  {{item.user_username}}</li>
                <li class="mt-2"> <b>Condition:</b>  {{item.condition}}</li>
                <li class="mt-2"> <b>Floor:</b>  {{item.floor}}</li>
                <li class="mt-2"> <b>Lift:</b>  {{item.lift}}</li>
                <li class="mt-2"> <b>Pets allowed:</b>  {{item.pets_allowed}}</li>
                <li class="mt-2"> <b>Terrace:</b>  {{item.terrace}}</li>
                <li class="mt-2"> <b>Swimming pool:</b>  {{item.swimming_pool}}</li>
                <li class="mt-2"> <b>Air Conditioning:</b>  {{item.air_conditioning}}</li>
                <li class="mt-2"> <b>Heating:</b>  {{item.heating}}</li>
                <li class="mt-2"> <b>Energy Certificate:</b>  {{item.energy_certificate}}</li>
                <li class="mt-2"> <b>Parking:</b>  {{item.parking}}</li>
            </ul>
        </div>
    </div>
    <div class="mt-4 mb-5">
        <h5 class="mb-2">Reach the owner!</h5>
        <form action="" class="d-flex flex-column mb-5">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Name</span>
            </div>
            <input type="text" class="form-control" placeholder="Type your name" aria-label="Name" v-model="name" aria-describedby="basic-addon1" required>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Email</span>
            </div>
            <input type="email" class="form-control" placeholder="Type your email" v-model="email" aria-label="Email" aria-describedby="basic-addon1" required>
          </div>
          <div class=" mb-3">
            <div class="mb-2">
              <label for="message">Message</label>
            </div>
            <textarea class="form-control" name="message" id="message" v-model="message" rows="10" required></textarea>
          </div>
        </form>
        <div class="d-flex justify-content-end">
          <div class="w-50">
            <input type="submit" width="50px" value="Reach the owner" v-on:click="reachOwner()">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import EventBus from '../../event-bus'
import Maps from '../components/maps.vue'
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'officeDetail',
  data(){
    return {
      item: [],
      params: '',
      name: '', 
      email: '', 
      message: ''
    }
  },
  components:{
    
    Maps, 
    Carousel,
    Slide
  },
  mounted() {
      EventBus.$on('checkItOut', data =>{
          this.item = data;
      })
  }, 
  methods:{
    reachOwner(){
        this.params = {
          "name": this.name, 
          "email": this.email, 
          "message": this.message 
        }

      event.preventDefault();
      Swal.fire(
        'Message sended!',
        'The owner will contact to you soon!',
        'success'
      )
    }
  }
}
</script>