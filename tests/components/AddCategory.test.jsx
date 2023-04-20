import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Pruebas en <AddCategory/>', () => {
     

    test('debe de cambiar el valor de la caja de texto', () => {
        
        render( <AddCategory  onNewCategory={ () => {} } /> );
        
        const input = screen.getByRole('textbox');

        // La funcion fireevent se utiliza para disparar eventos en un elemento de la interfaz de usuario simulando la 
        // interaccion del usuario con la aplicacion
        fireEvent.input( input, { target: { value: 'Saitama' }} );

        
        expect( input.value ).toBe( 'Saitama' );

        screen.debug();
    
    })
    

    
}) 