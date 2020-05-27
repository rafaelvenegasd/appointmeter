<template>
<div class="container ">
    <form action="" class="d-flex flex-column mb-5">
        <div class="content-big-box"> 
            <h4>Create place to live</h4>
            <div class="mr-5">
                <div class="mt-4">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="name">Name</span>
                        </div>
                        <input type="text" class="form-control" v-model="name" placeholder="Type the tittle of your post" aria-label="Name" aria-describedby="name">
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-between row">
                <div class="col-sm-6">
                    <div class="mb-5">
                        <label for="images" class="btn btn-light"><b>Select files</b> </label>
                        <input type="file" name="images"  id="images" multiple class="btn d-none mb-4" @change="onFileSelected" accept="image/png, image/jpeg">
                        <div v-for="photo in selectedFiles" :key="photo.lenght">
                            <span>{{photo.name}}</span>
                        </div>
                    </div>

                    <!-- Options -->

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="kind">Kind</label>
                        </div>
                        <select class="custom-select" id="kind" v-model="kind">
                            <option disabled value="">Select a property kind</option>
                            <option value="private">Private</option>
                            <option value="co-working">Co-working</option>
                            <option value="security-systen">Secuity systen</option>
                        </select>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="condition">Condition</label>
                        </div>
                        <select class="custom-select" id="condition" v-model="condition">
                            <option disabled value="">Select a property condition</option>
                            <option value="New">New fitted</option>
                            <option value="Good">Good conditions</option>
                            <option value="Renovation">Needs renovation</option>
                        </select>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="energy">Energy certificate</label>
                        </div>
                        <select class="custom-select" id="energy" v-model="energy">
                            <option disabled value="">Select the number of energy</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                        </select>
                    </div>

                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="floor">Floor</label>
                        </div>
                        <select class="custom-select" id="floor" v-model="floor">
                            <option disabled value="">Select the number of floor</option>
                            <option value="1rd Floor">1rd Floor</option>
                            <option value="2nd Floor">2nd Floor</option>
                            <option value="3rd Floor">3rd Floor</option>
                            <option value="4th Floor">4th Floor</option>
                            <option value="5th Floor">5th Floor</option>
                            <option value="6th Floor">6th Floor</option>
                            <option value="7th Floor">7th Floor</option>
                            <option value="8th Floor">8th Floor</option>
                            <option value="9th Floor">9th Floor</option>
                            <option value="10th Floor">10th Floor</option>
                        </select>
                    </div>
                </div> 

                <div class="col-sm-5 mt-5">
                    <div>
                        <h4>Price</h4>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="price">Price</span>
                            </div>
                            <input type="number" class="form-control" step="10" v-model="price" placeholder="Type the price in Euros" aria-label="Price" aria-describedby="price">
                        </div>
                    </div>
                    <div class="ml-3">
                        <h4>Location</h4>
                        <div class="input-group mb-3 mt-2">  
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="country">Country</span>
                            </div>
                            <input type="text" class="form-control" v-model="country" placeholder="Type the Country" aria-label="Location" aria-describedby="country">
                        </div>
                        <div class="input-group mb-3">      
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="city">City</span>
                            </div>
                            <input type="text" class="form-control" v-model="city" placeholder="Type the City" aria-label="Location" aria-describedby="city">
                        </div>  
                        <div class="input-group mb-3">    
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="postal-code">Postal Code</span>
                            </div>
                            <input type="text" class="form-control" v-model="postalcode" placeholder="Type the Postal Code" aria-label="Location" aria-describedby="postal-code">
                        </div>
                        <div class="input-group mb-3">    
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="street">Street</span>
                            </div>
                            <input type="text" class="form-control" v-model="street" placeholder="Type the Street" aria-label="Location" aria-describedby="street">
                        </div>
                    </div>

                    <div class="mt-4">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex justify-content-center align-items-center flex-column container text-center">
                                <h5>Lift</h5>
                                <div>
                                    <input type="radio" name="lift" id="lift-true" class="mr-2 btn-radio" v-model="lift" value=true><label for="lift-true" class="mr-3">Yes</label>
                                    <input type="radio" name="lift" id="lift-false" class="mr-2 btn-radio" v-model="lift" value=false><label for="lift-false">No</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center align-items-center flex-column container text-center">
                                <h5>Pets allowed</h5>
                                <div>
                                    <input type="radio" name="pets" id="pets-true" class="mr-2 btn-radio" v-model="pets" value=true><label for="pets-true" class="mr-3">Yes</label>
                                    <input type="radio" name="pets" id="pets-false" class="mr-2 btn-radio" v-model="pets" value=false><label for="pets-false">No</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex justify-content-center align-items-center flex-column container text-center">
                                <h5>Terrace</h5>
                                <div>
                                    <input type="radio" name="terrace" id="terrace-true" class="mr-2 btn-radio" v-model="terrace" value=true><label for="terrace-true" class="mr-3">Yes</label>
                                    <input type="radio" name="terrace" id="terrace-false" class="mr-2 btn-radio" v-model="terrace" value=false><label for="terrace-false">No</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center align-items-center flex-column container text-center">
                                <h5>Swimming pool</h5>
                                <div>
                                    <input type="radio" name="pool" id="pool-true" class="mr-2 btn-radio" v-model="pool" value=true><label for="pool-true" class="mr-3">Yes</label>
                                    <input type="radio" name="pool" id="pool-false" class="mr-2 btn-radio" v-model="pool" value=false><label for="pool-false">No</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex justify-content-center align-items-center flex-column container text-center">
                                <h5>Air conditioning</h5>
                                <div>
                                    <input type="radio" name="air" id="air-true" class="mr-2 btn-radio" v-model="air" value=true><label for="air-true" class="mr-3">Yes</label>
                                    <input type="radio" name="air" id="air-false" class="mr-2 btn-radio" v-model="air" value=false><label for="air-false">No</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center align-items-center flex-column container text-center">
                                <h5>Heating</h5>
                                <div>
                                    <input type="radio" name="heating" id="heating-true" class="mr-2 btn-radio" v-model="heating" value=true><label for="heating-true" class="mr-3">Yes</label>
                                    <input type="radio" name="heating" id="heating-false" class="mr-2 btn-radio" v-model="heating" value=false><label for="heating-false">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>

        <div>
            <div>
                <div class="mb-2">
                    <label for="message">Description</label>
                </div>
                <textarea class="form-control" name="description" id="description" rows="10" v-model="description"></textarea>
            </div>

            <div class="d-flex justify-content-end">
                <div class="w-50">
                    <input type="submit" value="Save & publish" v-on:click="createProperty()">  
                </div>
            </div>
        </div>
    </form> 
</div>
</template>

<script>
import Swal from 'sweetalert2'
import {addProperty} from '../../../axios-service'

export default {
    name: 'createOffice',
    data(){
        return{
            params: [],
            selectedFiles: [], 
            type: 'office',
            description: '', 
            name: '',
            price: 100,
            street: '', 
            postalcode: '', 
            city: '', 
            country: '',
            condition: '', 
            kind: '',
            floor: '', 
            energy: '',
            token: '',
            parking: 'A parking spot increments by 100€/month',
            lift: false, 
            pets: false, 
            terrace: false, 
            pool: false, 
            air: false, 
            heating: false,
            bargain: false
        }
    },
    methods:{
        onFileSelected(event){
            this.selectedFiles = event.target.files;    
        }, 
        async createProperty(){
            this.params={
                "name": this.name, 
                "description": this.description, 
                "price": this.price, 
                "street": this.street, 
                "postalcode": this.postalcode, 
                "city": this.city, 
                "country": this.country, 
                "photos": this.selectedFiles, 
                "condition": this.condition,
                "kind": this.kind,
                "floor": this.floor,
                "energy_certificate": this.energy,
                "terrace": this.terrace,
                "lift": this.lift,
                "pets_allowed": this.pets,
                "swimming_pool": this.pool,
                "air_conditioning": this.air,
                "heating": this.heating,
                "parking": this.parking,
                "bargain": this.bargain,
            }

            this.token = localStorage.getItem('access_token');
            event.preventDefault();
            console.log(this.params);

            addProperty(this.type, this.params, this.token, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    event.preventDefault();
                    console.log(this.params);
                    // this.$router.replace({ name: "createHome" });
                    Swal.fire('Property published!', '', 'success')
                }
            })
        }
    }
}
</script>