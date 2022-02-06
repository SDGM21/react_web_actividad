const api_key = "cU7bjEtvGhzhKqDFNSOxdPmIDckCdZ8o";

export default async function Getgifs({keyword = 'default'}) {
  try {
    const Api_Url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=10&offset=0&rating=r&lang=es`;
    const res = await fetch(Api_Url);
    const res_2 = await res.json();
    const { data = [] } = res_2;
    const gifs = data.map((image) => image.images.downsized_still.url);
    console.log(gifs);
    return gifs;
  } catch {
    return console.log("ERR_HTTP_REQUEST");
  }
}
