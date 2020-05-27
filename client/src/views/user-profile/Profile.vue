<template>
<div class="container ">
    <div class="d-flex justify-content-between "> 
        <div class="content-big-box">
            <div class="d-grid">
                <img src="../../assets/images/img.jpg" alt="logo" class="profile-photo mb-3">
                <div class="mb-3 text-center">
                    <div>
                        <h4>Profile info</h4>
                    </div>        
                    <h6>Name</h6>
                    <h6>Email</h6>
                    <h6>Password</h6>
                </div>
            </div>
        </div>

        <div class="content-big-box">
            <paginate ref="paginator" name = "items" :list = "items" :per = "2">
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
                                        <router-link tag="li" to="/update-property" exact>
                                            <input type="submit" class="btn mb-2" value="Edit Property" v-on:click="goToUpdate(item._id)">
                                        </router-link>
                                        <button type="submit" class="btn transparent-btn mb-4" v-on:click="deleteProperty()"> Delete Property </button>
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

        <div class="d-flex justify-content-end">
            <div class="mt-5 w-50">
                <router-link tag="li" to="/create-office" exact>
                    <input type="submit" class="btn mb-2" value="Add a place to work">
                </router-link>
                <router-link tag="li" to="/create-home" exact>
                    <input type="submit" class="btn mb-2" value="Add a place to live">
                </router-link>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import Swal from 'sweetalert2'
import {getPropertiesById} from '../../../axios-service'
import EventBus from '../../../event-bus'

export default {
    name: 'Profile',
    data(){
        return {
            type: 'home',  
            paginate:['items'],
            items: [],
            price: 0, 
            token: null, 
        }
    },
    mounted() {
        this.token = localStorage.getItem('access_token');
        console.log(this.token);
    }, 
    methods:{
        async goToUpdate(id){
          await getPropertiesById(this.type, id, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    EventBus.$emit('goToUpdate', data);
                }
            })
        },
        deleteProperty(){
            event.preventDefault();
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
                })

                swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
                }).then((result) => {
                if (result.value) {
                    swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                    )
                }
            })
        }
    }
}
</script>

<style>

</style>