<template>
  <div>
    <Header></Header>
      <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import  Header  from "./components/header.vue";
import  Footer  from "./components/footer.vue";

export default {
    name: "App",
    components:{
      Header,
      Footer
   }
}
</script>

<style>
  @import'~bootstrap/dist/css/bootstrap.css';
</style>