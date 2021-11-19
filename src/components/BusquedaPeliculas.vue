<template>
  <div>
    <div
      v-for="pelicula in peliculas"
      :key="pelicula"
      class="card"
      style="width: 70%"
    >
      <img :src="pelicula.foto" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ pelicula.titulo }}</h5>
        <p class="card-text">
          {{ pelicula.argumento }}
        </p>
        <h5 class="card-title">Fecha estreno</h5>
        <p class="card-text">
          {{ pelicula.fechaEstreno }}
        </p>
        <h5 class="card-title">Actores</h5>
        <p class="card-text">
          {{ pelicula.actores }}
        </p>
        <h5 class="card-title">Director</h5>
        <p class="card-text">
          {{ pelicula.director }}
        </p>
        <h5 class="card-title">Duración</h5>
        <p class="card-text">{{ pelicula.duracion }} min.</p>
        <h5 class="card-title">Precio</h5>
        <p class="card-text">{{ pelicula.precio }} €</p>
        <h5 class="card-title">Genero/Pais</h5>
        <p class="card-text">
          {{ peliculaType }}
        </p>
        <h5>Trailer</h5>
        <iframe :src="pelicula.enlaceVideo"> </iframe>
    
      </div>
    </div>
  </div>
</template>

<script>
import ServicePelicula from "../Services/ServicePelicula";

var _service = new ServicePelicula();
export default {
  name: "BusquedaPeliculas",
  data() {
    return {
      peliculas: [],
      nombre:""
    };
  },
  methods: {
    buscarPelicula(nombre) {
      _service.buscarPelicula(nombre).then((res) => {
        this.peliculas = res.data;
        console.log(JSON.stringify(this.peliculas));
      });
    },
  },
  mounted() {
      this.nombre = this.$route.params.nombre;
      this.buscarPelicula(this.nombre);
  },
  watch : {
      "$route.params.nombre"(next, prev) {
          if (next != prev) {
              this.buscarPelicula(next)
          }
      }
  }
};
</script>

<style scoped>
</style>