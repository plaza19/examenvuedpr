<template>
  <div>
    <h1>Editar Pelicula: {{ pelicula.titulo }}</h1>

    <form @submit.prevent="modificarGenero()">
      <label class="form-label">Genero</label>
      <select class="form-select" v-model="idGenero">
        <option
          :value="genero.idGenero"
          v-for="genero in generos"
          :key="genero"
        >
          {{ genero.nombre }}
        </option>
      </select>
      <button class="btn btn-primary">Gurdar genero</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import ServicePelicula from "../Services/ServicePelicula";

var _service = new ServicePelicula();

export default {
  name: "EditarPelicula",
  data() {
    return {
      idPelicula: "",
      pelicula: {},
      generos: [],
      idGenero: "",
    };
  },
  mounted() {
    this.idPelicula = this.$route.params.idPelicula;
    console.log(this.$route.params.idPelicula);
    _service.getPeliculaById(this.idPelicula).then((res) => {
      this.pelicula = res.data;
      _service.getAllGeneros().then((res) => {
        this.generos = res.data;
      });
    });
  },
  methods: {
    modificarGenero() {
        console.log(this.idGenero);
      _service.modificarGenero(this.idPelicula, this.idGenero).then((res) => {
        console.log(res);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha modificado la pelicula",
          showConfirmButton: false,
          timer: 1500,
        });
        _service.getGeneroname(this.idGenero).then(res=> {
            console.log(res);
            this.$router.push("/peliculas/"+ "genero" + "/" + this.idGenero + "/" + res.data.nombre)
        })
        
      });
    },
  },
};
</script>

<style scoped>
</style>