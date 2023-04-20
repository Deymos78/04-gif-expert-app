import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    // Creamos un hook de estado y lo inicializamos por defecto un arreglo con el valor One Punch 
    const [categories, setcategories] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {

        // Comprobamos si la nueva categoria ya se encuentra en la lista de categorias
        if ( categories.includes(newCategory)  ) return;

        //Hay que evitar mutar los objetos en react y usar otras formas para que funcione correctamente
        
        //AQUI HAY UNAS CUANTAS FORMAS DE INSERTAR UN NUEVO ELEMENTO DENTRO DEL PUSH
            //Se colocaran las nuevas categorias al principio empujando las antiguas a los niveles mas altos dentro del arreglo
        //Se actualiza el estado del hook, manteniendo los valores anteriores e introduciendo los nuevos al principio empujando a los que
        // ya se encontraban en la lista
        setcategories([newCategory, ...categories ]);
        // setcategories( cat =>[...cat, 'Valorant'])

    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
            {/* Mandamos directamente la referencia de la funcion */}
        <AddCategory  
            // setcategories={ setcategories }
            onNewCategory = { (value) => onAddCategory(value)}
        /> 

        {/* Listado de Gif */}
        {/* <button onClick={ onAddCategory}>Agregar</button> */}
        
        { 
            categories.map( (category) => (
                <GifGrid 
                    key={ category}
                    category={ category }
                />
            )) 
        }
        
            {/* Gif Item */}

    </>
    
  )
}
