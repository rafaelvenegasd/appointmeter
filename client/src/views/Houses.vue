<template>
  <div class="container">
    <div class="d-flex justify-content-between ">
        <div class="content-big-box">
            <h4>Find your perfect place to live</h4>

            <!-- Collapse  -->
            <div id="accordion" class="d-flex accordion">
                <div class="card mr-4">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse"  data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            +     Kind
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        <div>
                            <div>
                                <input type="radio" name="radioBtn" id="Flat" class="mr-2 btn-radio" v-on:click="checkFilter('kind', 'flat')" ><label for="Flat">Flat / Apartment</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="House"  class="mr-2 btn-radio" v-on:click="checkFilter('kind', 'home')"><label for="House">House</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="Duplex" class="mr-2 btn-radio" v-on:click="checkFilter('kind', 'duplex')"><label for="Duplex">Duplex</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="Penthouses" class="mr-2 btn-radio" v-on:click="checkFilter('kind', 'penthouses')"><label for="Penthouses">Penthouses</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="card mr-4">
                    <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        +     Price
                        </button>
                    </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">

                        
                        <div class="slidecontainer" >
                            <input type="range" name="princeInput" id="priceInput" min="100" max="1200" step="10" value="500" v-model="price" :v-on:click="checkFilter('price', price)" oninput="priceOutput.value = priceInput.value" class="slider">
                            <output name="priceOutput" id="priceOutput">500</output>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="card mr-4">
                    <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        +     Bedrooms
                        </button>
                    </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        <div>
                            <div>
                                <input type="radio" name="radioBtn" id="studio" class="mr-2 btn-radio" v-on:click="checkFilter('bedrooms', 0)" ><label for="studio">Studio</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="1_bedroom" class="mr-2 btn-radio" v-on:click="checkFilter('bedrooms', 1)"><label for="1_bedroom">1 bedroom</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="2_bedroom" class="mr-2 btn-radio" v-on:click="checkFilter('bedrooms', 2)"><label for="2_bedroom">2 bedrooms</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="more_bedroom" class="mr-2 btn-radio" v-on:click="checkFilter('bedrooms', 'more')"><label for="more_bedroom">More or 2 bedrooms</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div class="card mr-4">
                    <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        +     bathrooms
                        </button>
                    </h5>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div class="card-body">
                        <div>
                            <div>
                                <input type="radio" name="radioBtn" id="1_bedroom" class="mr-2 btn-radio" v-on:click="checkFilter('bathrooms', 1)"><label for="1_bedroom">1 bathroom</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="2_bedroom" class="mr-2 btn-radio" v-on:click="checkFilter('bathrooms', 2)"><label for="2_bedroom">2 Bathrooms</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="more_bedroom" class="mr-2 btn-radio" v-on:click="checkFilter('bathrooms', 'more')"><label for="more_bedroom">More or 2 Bathrooms</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div class="card mr-4">
                    <div class="card-header" id="headingFive">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        +     Kitchen
                        </button>
                    </h5>
                    </div>
                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                    <div class="card-body">
                        <div>
                            <div>
                                <input type="radio" name="radioBtn" id="fully" class="mr-2 btn-radio" v-on:click="checkFilter('kitchen', 'fully fitted')" ><label for="fully">Fully fitted</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="furnished" class="mr-2 btn-radio" v-on:click="checkFilter('kitchen', 'furnished')"><label for="furnished">Furnished</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="unfurnished" class="mr-2 btn-radio" v-on:click="checkFilter('kitchen', 'unfurnished')"><label for="unfurnished">Unfurnished</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div class="card mr-4">
                    <div class="card-header" id="headingSix">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        +     Conditions
                        </button>
                    </h5>
                    </div>
                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                    <div class="card-body">
                        <div>
                            <div>
                                <input type="radio" name="radioBtn" id="new" class="mr-2 btn-radio" v-on:click="checkFilter('condition', 'new')" ><label for="new">New fitted</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="good" class="mr-2 btn-radio" v-on:click="checkFilter('condition', 'good')"><label for="good">Good conditions</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="renovation" class="mr-2 btn-radio" v-on:click="checkFilter('condition', 'need renovation')"><label for="renovation">Needs renovation</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <select class="custom-select" id="inputGroupSelect01" v-on:change="checkFilter('sort', 'invert')">
                    <option value="newer">Newer</option>
                    <option value="older">Older</option>
                </select>
            </div>
            <!-- End Collapse -->
        
            <div class="content-big-box">
                <paginate ref="paginator" name = "items" :list = "items" :per = "4">
                    <div class="d-flex">
                        <div v-for="item in paginated('items')" :key="item.item_id">
                            <div class="card mr-5 ml-2" style="width: 18rem;">
                                <figure class="d-flex text-right m-0">
                                    <div v-if="item.bargain == true">
                                        <button class="btn floating" disabled >○ Bargain</button>
                                    </div>
                                    <img class="card-img-top" :src="item.photos[0]" alt="House Image">  
                                </figure>
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><h5 class="card-title">{{item.name}}</h5></li>
                                        <li class="list-group-item">
                                            <ul>
                                                <li>Kind: {{item.kind}} </li>
                                                <li>Bathroom: {{item.bathrooms}}</li>
                                                <li>Bedroom: {{item.bedrooms}}</li>
                                            </ul>
                                        </li>
                                        <li class="list-group-item">Address: {{item.street}}, {{item.city}} </li>
                                        <li class="list-group-item">
                                            <div class="mb-3">
                                                <span>{{item.price}} Euros </span>
                                            </div>
                                            <router-link tag="li" to="/home-detail" exact>
                                                <input type="submit" class="btn" value="Check it out" :id="item._id" v-on:click="checkItOut(item._id)">
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </paginate>
                <paginate-links for="items" :show-step-links="true" :simple="{ prev: 'Anterior', next: 'Siguiente' }">
                </paginate-links>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../../event-bus'
import {getPropertiesById, getPropertiesByParams} from '../../axios-service'

export default {
  name: 'Houses',
  data(){
    return {
        type: 'home',  
        paginate:['items'],
        items: [],
        price: 0
    }
  },
  mounted() {
      EventBus.$on('searching', data =>{
            this.items = data;
            console.log(this.items);
      })
  }, 
  methods:{
      async checkItOut(id){
          await getPropertiesById(this.type, id, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    EventBus.$emit('checkItOut', data);
                }
            })
      },
      checkFilter(paramName, param, event){
            param = this.price;
            getPropertiesByParams(this.type + 's', paramName, param, (err, data) =>{
                try{
                    if (data.length > 0){
                        return this.items = data;
                     }
                }
                catch(err){ 
                    console.error(err)
                } 
            })
      } 
  }
}
</script>