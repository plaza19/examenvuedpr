<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Géneros
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li v-for="genero in generos" :key="genero">
                  <router-link :to="'/peliculas/' + 'genero' + '/' + genero.idGenero  + '/' + genero.nombre" class="dropdown-item">{{genero.nombre}}</router-link>
            </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Nacionalidad
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li v-for="nacionalidad in nacionalidades" :key="nacionalidad">
                  <router-link :to="'/peliculas/' + 'nacionalidad' + '/' + nacionalidad.idNacionalidad  + '/' + nacionalidad.nombre" class="dropdown-item" href="#">{{nacionalidad.nombre}}<img class="icon" :src="nacionalidad.bandera"/></router-link>
                  </li>

            </ul>
          </li>
        </ul>
      </div>
      <form class="d-flex" @submit.prevent="buscarPelicula()">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="nombreBusqueda">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>

import ServicePelicula from "../Services/ServicePelicula";

var _service = new ServicePelicula();

export default {
  name: "NavBar",
  data () {
      return {
          generos : [], 
          nacionalidades : [],
          nombreBusqueda : ""
      }
  },
  methods : {
      getNacionalidades() {
          _service.getAllNacionalidades().then(res=> {
              this.nacionalidades = res.data;
          })
      },

      getGeneros() {
          _service.getAllGeneros().then(res=> {
              this.generos = res.data
          })
      },
      buscarPelicula() {
          this.$router.push("/buscarpelicula/" + this.nombreBusqueda);
      }
      
  },
  mounted() {
      this.getNacionalidades();
      this.getGeneros();
  }
  
};
</script>



<style scoped>

img.icon  {
    height: 30px;
    width: 30px;
}

</style>
