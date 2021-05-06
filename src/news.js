const BASE_API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const API_KEY = 'j8CRf01NKm3WgitxiSwcZAoR7WLK7DcJ';

export async function getNews(passedParams) {
  let params = new URLSearchParams(passedParams).toString();
  let Url = `${BASE_API_URL}?api-key=${API_KEY}&${params}`;
  console.log(Url);
  let result = await fetch(Url);
  return result.json();
}
