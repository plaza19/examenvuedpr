import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

//components
// import NavBar from "./components/NavBar.vue"
import Home from "./components/Home.vue";
import Peliculas from "./components/Peliculas.vue";
import BusquedaPeliculas from "./components/BusquedaPeliculas.vue";
import EditarPelicula from "./components/EditarPelicula.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    {path:"/peliculas/:filtro/:query/:type", component: Peliculas},
    {path:"/buscarpelicula/:nombre", component: BusquedaPeliculas},
    {path:"/editarpelicula/:idPelicula" , component: EditarPelicula}
  ]
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
