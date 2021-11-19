import axios from "axios";
import Global from "../Global";

export default class ServicePelicula {

    getAllGeneros() {
        var request = "/api/Generos";
        var url = Global.urlApiPeliculas + request;

        return axios.get(url);
    }

    getAllNacionalidades() {
        var request = "/api/Nacionalidades";
        var url = Global.urlApiPeliculas + request;

        return axios.get(url);
    }

    getPeliculasByGenero(genero) {
        var request = "/api/Peliculas/PeliculasGenero/" + genero;
        var url = Global.urlApiPeliculas + request;

        return axios.get(url);
    }

    getPeliculasByNacionalidad(nacionalidad) {
        var request = "/api/Peliculas/PeliculasNacionalidad/" + nacionalidad;
        var url = Global.urlApiPeliculas + request;

        return axios.get(url);
    }

    cargarPelicula(idPelicula) {
        var request = "/api/Peliculas/" + idPelicula;
        var url = Global.urlApiPeliculas + request;

        return axios.get(url);
    }

    eliminarPelicula(idPelicula) {
        var request = "/api/Peliculas/" + idPelicula;
        var url = Global.urlApiPeliculas + request;

        return axios.delete(url);
    }

    buscarPelicula(nombre) {
        var request = "/api/Peliculas/BuscadorPeliculas/" + nombre;
        var url = Global.urlApiPeliculas + request;

        return axios.get(url);
    }

    getPeliculaById(idPelicula) {
        var request = "/api/Peliculas/" + idPelicula;
        var url = Global.urlApiPeliculas + request;

        return axios.get(url);
        
    }

    modificarGenero(idPelicula, idgenero) {
        var request = "/api/Peliculas/UpdatePeliculaGenero/" + idPelicula +"/" + idgenero;
        var url = Global.urlApiPeliculas + request;

        return axios.put(url);
    }

    getGeneroname(idGenero) {

        var request = "/api/Generos/" + idGenero;
        var url = Global.urlApiPeliculas + request;

        return axios.get(url);
    }

}