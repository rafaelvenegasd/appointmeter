<template>
<div class="container">
    <div class="d-flex justify-content-between ">
        <div class="content-big-box">
            <h4>Find your perfect place to work</h4>
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
                                <input type="radio" name="kind" id="Private" class="mr-2 btn-radio" v-on:click="checkFilter('kind', 'private')"><label for="Private">Private</label>
                            </div>
                            <div>
                                <input type="radio" name="kind" id="Coworking" class="mr-2 btn-radio" v-on:click="checkFilter('kind', 'coworking')"><label for="Coworking">Co-working</label>
                            </div>
                            <div>
                                <input type="radio" name="kind" id="Security" class="mr-2 btn-radio" v-on:click="checkFilter('kind', 'security')"><label for="Security">Security systen</label>
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
                                    <div :v-if="item.bargain ">
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
                                                <li>Floor: {{item.floor}}</li>
                                            </ul>
                                        </li>
                                        <li class="list-group-item">Address: {{item.street}}, {{item.city}}</li>
                                        <li class="list-group-item">
                                            <div class="mb-3">
                                                <span>{{item.price}} Euros </span>
                                            </div>
                                            <router-link tag="li" to="/office-detail" exact>
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
        type: 'office',  
        paginate:['items'],
        value: 50,
        items: [],
    }
},
mounted() {
    EventBus.$on('searching', data =>{
        this.items = data;
        console.log(this.items);
    })
}, 
methods:{
        checkItOut(id){
            getPropertiesById(this.type, id, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    EventBus.$emit('checkItOut', data);
                }
            })
        }, 
        checkFilter(paramName, param, event){
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