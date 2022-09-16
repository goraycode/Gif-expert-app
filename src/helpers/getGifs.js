export const getGifs = async (category, amount) => {
  const key = "ZhBydrf4XcHM9IUN9ph7lU4QMChABO6H";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=${amount}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  //para que me traiga solo lo que quiero
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    img: gif.images.original.url,
  }));

  return gifs;
};