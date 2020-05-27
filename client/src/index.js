import Vue from 'vue'
import axios from 'axios';
import router from './routes/index'
import './assets/styles/importer.css';
import VuePaginate from 'vue-paginate'
import 'bootstrap'
import App from './App.vue'
import 'leaflet/dist/leaflet.css';

//If the maker icons are missing the issue lies in a problem with webpack, a quick fix is to run this snippet:
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.use(VuePaginate);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;



new Vue({ el: '#app', router, render: h => h(App)})