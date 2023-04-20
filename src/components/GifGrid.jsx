import { useEffect, useState } from 'react';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { getGifs } from '../helpers/getGifs';


export const GifGrid = ({ category }) => {


    const { images, isLoading } = useFetchGifs( category );

  return (
    <>
        <h2>{ category }</h2>
        {
            isLoading && (<h2>Cargando...</h2>)
        }

        <div className='card-grid'>
            {/* Images.map */}
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
