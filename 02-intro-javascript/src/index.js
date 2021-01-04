const getImagen = async() => {

    try {

        const apiKey = 'oOLjcgRwQ07eJZFYI3dMKQ3quhERcQLE';
        // const apiKey = 'asdfasdfasdf';
        await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
          .then( resp => resp.json() )
          .then(({data}) => {            
            const { url } = data.images.original;
    
            const img = document.createElement('img');
            img.src = url;
            document.body.append( img );
          }).catch( error => console.warn(error) );
        // const { data } = await resp.json(); 


    } catch (error) {
        // manejo del error
        console.error(error)
    }
    
    
    
}

 getImagen();
