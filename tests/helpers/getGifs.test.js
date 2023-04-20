import { getGifs } from "../../src/helpers/getGifs"


describe('Pruebas en getGifs', () => {
    

    test('debe de retornar un arreglo de gifs', async() => {
         

        const gifs = await getGifs('One Punch');

        console.log(gifs);  

        // Comprobar que se devuelve un arreglo con al menos un elemento
        expect( gifs.length ).toBeGreaterThan( 0 );
        // Comprobar que los arreglos devueltos tengan la siguiente estructura, y que ademas tengan strings en cada elemento
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
        
        
    });
    


})