import { useEffect, useState } from 'react';

import PropTypes from 'prop-types'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { getGifs } from '../helpers/getGifs';


export const GifGrid = ({ category }) => {


    // Se crea una instancia del custom Hook que hemos creado que nos devolvera los gifs y un estado para el cargando de la pagina
    const { images, isLoading } = useFetchGifs( category );

    

  return (
    <>
        <h2>{ category }</h2>
        {
            isLoading && (<h2>Cargando...</h2>)
        }

        <div className='card-grid'>
            {/* Images.map */}
            {/* Recorremos el arreglo de objeto, el cual tiene los gifs de la peticion asincrona en su interior
                a cada uno de ellos se le asignara una key que sera el id de la imagen ademas se pasara las propiedades
                de cada objeto al componente funcional   */}
            {
                images.map( ( image ) =>(
                    <GifItem 
                    
                        key={ image.id }
                        //Lo que se hace aqui es esparcir las propiedades, es util cuando se tienen muchas propiedades
                        { ...image}
                    />
                ))
            }
        </div>
    </>   
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
