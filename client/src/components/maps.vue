<template>

  <div style="height: 500px; width: 500px">
    <div style="height: 200px overflow: auto;">
    </div>
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-circle
      :lat-lng="circle.center"
      :radius="circle.radius"
      :color="circle.color"
    />
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LCircle, LPopup, LTooltip } from "vue2-leaflet";
import axios from 'axios';
import EventBus from '../../event-bus'

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LCircle,
    LPopup,
    LTooltip
  },
  data() {
    return {
      street: '',
      city: '',
      country: '',
      coordenates: '',
      zoom: 13,
      center: latLng(0, 0),
      circle: {
        center: latLng(0, 0),
        radius: 1000,
        color: 'grey',
        weight: 1
      },
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: latLng(0, 0),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
    };
  },
  mounted() {
    
    EventBus.$on('checkItOut', async data =>{
        this.street = data.street;
        this.city = data.city;
        this.country = data.country;
        await this.locationToCoords()
    })
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
    locationToCoords(){
      const a = {
          street: this.street,
          city: this.city,
          country: this.country,
      }
      const url = Object.keys(a).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(a[k])
      }).join('&');
      axios
        .get(`https://nominatim.openstreetmap.org/search?format=json&${url}`)
        .then(res => {
          this.coordenates = latLng(res.data[0].lat, res.data[0].lon);
          this.center = this.coordenates;
          this.circle.center = this.coordenates;
          this.currentCenter = this.coordenates;    
        })
        .catch(err => console.log(err));
    }
  }
};
</script>