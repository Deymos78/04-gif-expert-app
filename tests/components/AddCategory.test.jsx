import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Pruebas en <AddCategory/>', () => {
     

    test('debe de cambiar el valor de la caja de texto', () => {
        
        // El render nos sirve para simular la ejecicion de la aplicacion
        render( <AddCategory  onNewCategory={ () => {} } /> );
        
        const input = screen.getByRole('textbox');

        // La funcion fireevent se utiliza para disparar eventos en un elemento de la interfaz de usuario simulando la 
        // interaccion del usuario con la aplicacion
        fireEvent.input( input, { target: { value: 'Saitama' }} );

        
        // Realizamos la prueba que  vamos a necesitar para verificar la funcionalidad de la prueba
        expect( input.value ).toBe( 'Saitama' );

        // screen.debug();
    });
    

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        
        const inputValue = 'Saitama';
        //Creamos una constante con la simulacion de una funcion
        const onNewCategory = jest.fn();

        // render( <AddCategory  onNewCategory={ () => {} } /> );
        // Ahora le pasamos la funcion
        render( <AddCategory  onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue }} );
        fireEvent.submit( form );
        
        // screen.debug();

        // Comprobamos que el valor del input este vacio 
        expect( input.value ).toBe('');
        
        //Comprobamos que ha sido llamada al menos una vez
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
 
    });

    test('no debe de llamar el onNewCategory si el input esta vacio ', () => { 
        
        const onNewCategory = jest.fn();

        render( <AddCategory  onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form);  

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        // expect( onNewCategory ).not.toHaveBeenCalled(0);

    
    })

    
}) 