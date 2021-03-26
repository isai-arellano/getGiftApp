export const getGifts = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=8EqRefM4tthlTWLjQFUARIh9W6BgV6BF&limit=10`
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs
}