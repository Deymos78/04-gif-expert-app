

export const getGifs = async(category) => {


    // Montamos la URL con el nombre de las categorias para hacer la correspondiente peticion a la api
    // tambien limitamos el numero de gifs a 10     
    const url = `https://api.giphy.com/v1/gifs/search?api_key=F95hkGLnz2unWMtwvFv3rIlLkTLFDkh1&q=${ category }&limit=10`

    // Realizamos la peticion
    const resp =  await fetch( url );
    
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));


    
    return gifs;

}