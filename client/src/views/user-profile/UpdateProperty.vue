<template>
<div class="container ">
    <form action="" class="d-flex flex-column mb-5">
        <div class="content-big-box"> 
            <h4>Upload this place</h4>
            <div class="mr-5">
                <div class="mt-4">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Name</span>
                        </div>
                        <input type="text" class="form-control" :placeholder=item.name aria-label="Name" aria-describedby="basic-addon1" >
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-between">
                <div>
                    <input type="file" name="images" id="images" multiple class="btn transparent-btn mb-4" @change="onFileSelected" accept="image/png, image/jpeg">
                        
                    <div class="d-flex mb-4">
                        <img alt="Lookhaus logo" src="../../assets/images/logos/black-small.png" class="logo mr-4">
                        <img alt="Lookhaus logo" src="../../assets/images/logos/black-small.png" class="logo mr-4">
                        <img alt="Lookhaus logo" src="../../assets/images/logos/black-small.png" class="logo mr-4">
                    </div>  

                    <div class="d-flex justify-content-end mb-4">
                        <div class="w-50">
                            <input type="submit" value="Upload Images" v-on:click="onUpload()">  
                        </div>
                    </div>

                    <!-- Options -->
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Select kind</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option value="flat" selected >Flat</option>
                            <option value="home">House</option>
                            <option value="duplex">Duplex</option>
                            <option value="penthouse">Penthouse</option>
                        </select>
                    </div>
                
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Select bedrooms</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option value="1" selected>One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="more">More or three</option>
                        </select>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Select bathrooms</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option value="1" selected>One</option>
                            <option value="2">Two</option>
                            <option value="more">More or two</option>
                        </select>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Select kitchen conditions</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected value="fully fitted">Fully fitted</option>
                            <option value="furnished">Furnished</option>
                            <option value="unfurnished">Unfurnished</option>
                        </select>
                    </div>
                </div> 
                <div class="mt-5">
                    <div class="ml-3">
                        <div class="input-group mb-3 mt-5">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Location</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Type the location" aria-label="Location" aria-describedby="basic-addon1">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class=" mb-3">
                <div class="mb-2">
                <label for="message">Description</label>
                </div>
                <textarea class="form-control" name="description" id="description" rows="10"></textarea>
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
import EventBus from '../../../event-bus'
export default {
    name: 'updateProperty',
    data(){
        return{
            item: [],
            selectedFile: null
        }
    },
    mounted() {
      EventBus.$on('goToUpdate', data =>{
          this.item = data;
          console.log(this.item);
      })
    },
    methods:{
        onFileSelected(event){
            this.selectedFile = event.target.files[0];
        }, 
        onUpload(){
            event.preventDefault();
            console.log(this.selectedFile)
        }, 
        createProperty(){
            event.preventDefault();
            Swal.fire(
            'Property published!',
            '',
            'success'
      )
        }
    }
}
</script>
