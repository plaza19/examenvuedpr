<template>
<div>
    <img src="https://www.bluechipexterminating.com/wp-content/uploads/2020/02/loading-gif-png-5.gif" v-if="status==false">
  <div>
      <div v-if="idPeliculaSeleccionada != ''">
          <DetallesPelicula :pelicula_props="idPeliculaSeleccionada" :peliculaType="type" :index="indexPelicula" v-on:eliminarPelicula="eliminarPelicula"></DetallesPelicula>
          
      </div>


    <h1>Peliculas : {{peliculas.length}} , Genero: {{type}}</h1>
    <div v-for="pelicula, index in peliculas" :key="pelicula" class="card" style="width: 18rem">
      <img :src="pelicula.foto" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{pelicula.titulo}}</h5>
        <p class="card-text">
            {{pelicula.argumento}}
        </p>
        <a :href="pelicula.enlaceVideo" class="btn btn-danger">Youtube</a>
        <a @click="seleccionarPelicula(pelicula.idPelicula, index)" class="btn btn-secondary">Detalles</a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import ServicePelicula from "../Services/ServicePelicula";
import DetallesPelicula from "./DetallesPelicula.vue";

var _sevice = new ServicePelicula();

export default {
  name: "Peliculas",
  components: {
    DetallesPelicula
  },
  data() {
    return {
      peliculas: [],
      filtro: "",
      query: "",
      idPeliculaSeleccionada: "",
      valorPelicula : "",
      type : "",
      indexPelicula : 0,
      staus: false
    };
  },
  mounted() {
    this.filtro = this.$route.params.filtro;
    this.query = this.$route.params.query;
    this.cargarDatos();
  },
  methods: {
    cargarDatos() {
        this.idPeliculaSeleccionada ="";
      this.filtro = this.$route.params.filtro;
      this.query = this.$route.params.query;
      this.type = this.$route.params.type;

      if (this.filtro == "genero") {
        this.cargarDatosGenero(this.query);
      } else {
        this.cargarDatosNacionalidad(this.query);
      }
    },
    cargarDatosGenero(genero) {
      _sevice.getPeliculasByGenero(genero).then((res) => {
        this.peliculas = res.data;
        this.staus = true
      });
    },
    cargarDatosNacionalidad(nacionalidad) {
      _sevice.getPeliculasByGenero(nacionalidad).then((res) => {
        this.peliculas = res.data;
        this.staus = true
        console.log(this.peliculas);
      });
    },

    seleccionarPelicula(idPelicula, index) {
        this.idPeliculaSeleccionada = idPelicula;
        this.indexPelicula = index;

    },
    eliminarPelicula(index, idPelicula) {
        this.peliculas.splice(index,1);
        _sevice.eliminarPelicula(idPelicula).then(res=> {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            console.log(res);
            this.idPeliculaSeleccionada = "";
        })
    }
  },
  watch: {
    "$route.params.filtro"(next, prev) {
      if (next != prev) {
        this.cargarDatos();
      }
    },
    "$route.params.query"(next, prev) {
      if (next != prev) {
        this.cargarDatos();
      }
    },
  },
};
</script>

<style scoped>
</style>