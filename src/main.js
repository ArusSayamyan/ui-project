import { createApp } from 'vue'
import App from './App.vue'
import BaseWrapper from "@/base/BaseWrapper";
import BaseBtn from "@/base/BaseBtn";
import VueApexCharts from "vue3-apexcharts";
import PrimeVue from 'primevue/config';
import InputSwitch from 'primevue/inputswitch';
import { Swiper, SwiperSlide } from 'swiper/vue'

// PRIMEVUE STYLES
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


const app = createApp(App)

app.component('InputSwitch', InputSwitch)
app.component('base-wrapper', BaseWrapper)
app.component('base-btn', BaseBtn)
app.component('swiper-vue', Swiper)
app.component('swiper-slide', SwiperSlide)

app.use(VueApexCharts);
app.use(PrimeVue);
app.mount('#app')
