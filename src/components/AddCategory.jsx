import { useState } from 'react'
import PropTypes from 'prop-types'


// Los props siempre estan disponibles para nosotros en cualquiere momento que lo necesitemos 
// Pero por lo general solo recuperamos lo que vamos a necesitar
// En este caso vamos a necesitar el setCategories que viene incrusta en los props
export const AddCategory = ({ onNewCategory }) => {


    // Inicializamos un hook de estado que nos permita almacenar el valor del input
    const [ inputValue, setinputValue ] = useState('');

    //La funcion se llama cuando se produce un cambio en el input y se actualiza el "value" dentro del even.targe.value
    const onInputChange = ( { target } ) =>{
        
        //Usamos la funcion del hook para cambiar el estado del valor, y lo actualizamos cada vez que se produzca una cambio en el input
        setinputValue(target.value);

    }

    //Esta funcion se ejecuta cuando se realiza un submit del formulario
        // Se recoge como parametro el event
    const onSubmit = ( event ) => {
        // console.log('Hola mundo desde Submit')
        // Con el preventDefault evitamos que se realize el comportamiento normal del elemento, en este
        // caso evitamos que se recargue la pagina cada vez que pulsamos enter
        event.preventDefault();
        

        //Limitamos la entrada hasta a un caracter, asi que cuando intentemos realizar la entrada de categorias
        // aunque se llame a la funcion, no se va a agregar elementos vacios o de un caracter
        if(inputValue.trim().length <= 1) return;
        
        //Colocamos el valor que se encuentre en el input a traves del value inputValue
        //Mantenemos las categorias anteriores y introducimos la nueva
        // El setCategories nos permite enviar un callBack en el cual me permite recoger las categorias en el e stado actual
        // y me permite introducir el nuevo inputValue, seguido de la desestructuracion de las categorias anteriores     
        // setcategories( (categories) => [inputValue, ...categories ]);

        onNewCategory( inputValue.trim() );

        //Limpiamos el input colocandole un valor de cadena vacia
        setinputValue('');
    }

  return (

    <form onSubmit={  onSubmit } aria-label="form">
        <input 
            type="text"
            placeholder="Buscar Gifs"
            //El valor que va a terne el input
            value={ inputValue } 
            //Cuando se produzca un cambio llamamos a la funcion onInputChange
            onChange={ onInputChange}
        /> 
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}


