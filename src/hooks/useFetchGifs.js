import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (category) => {


    // Se usa el hook useState para tener un estado que nos permita guardar las imagenes cada vez que se realiza una busqueda
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    //Con esta funcion q se ejecuta una sola vez cuano se realiza una busqueda, recupera un listado de gifs por una peticion
    // url a una API de gifs, se trata de una funcion asincrona que espera la respuesta de otra funciona asincrona getGifs
    // una vez recuperadas los gifs se introducen en el hook para actualizar los gifs
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading( false ); 
    }

    // El useEffect es un hook que permite hacer efectos secundario, uno de esos efectos que nos servira es el llamdo a una api
    // Si pasamos el segundo valor que es una lista de dependencias y lo dejamos en blanco lo que tendremos 
    // es que solo se dispara la primera vez que se crea y se construye el componente
    
    useEffect( () => {
        getImages();
    }, [] )
  
  
    //Usamos el return para otras cosas 
    //En este caso hacemos un return de las imagenes y del estado de la carga de contenido
    return {
        images,
        isLoading
    }
}
