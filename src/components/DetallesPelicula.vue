<template>
  <div>
    <h1>DetallesPelicula {{ pelicula.titulo }}</h1>
    <div class="card" style="">
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
        <iframe
          :src="'https://www.youtube.com/embed/' + pelicula.youTube"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <a @click="eliminarPelicula()" class="btn btn-danger">Eliminar</a>
        <a @click="editarPelicula()" class="btn btn-warning">Editar</a>
      </div>
    </div>
  </div>
</template>

<script>
import ServicePelicula from "../Services/ServicePelicula";
import Swal from "sweetalert2";

var _service = new ServicePelicula();

export default {
  name: "DetallesPelicula",
  props: ["pelicula_props", "peliculaType", "index"],
  data() {
    return {
      pelicula: {},
    };
  },
  methods: {
    cargarDetallesPelicula(idPelicula) {
      _service.cargarPelicula(idPelicula).then((res) => {
        this.pelicula = res.data;
      });
    },
    eliminarPelicula() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$emit("eliminarPelicula", this.index, this.pelicula.idPelicula);
        }
      });
    },
    editarPelicula() {
      this.$router.push("/editarpelicula/" + this.pelicula.idPelicula);
    },
  },
  mounted() {
    this.cargarDetallesPelicula(this.pelicula_props);
  },
  watch: {
    pelicula_props(next, prev) {
      if (next != prev) this.cargarDetallesPelicula(next);
    },
  },
};
</script>

<style scoped>
div.card {
  width: 50%;
}
</style>