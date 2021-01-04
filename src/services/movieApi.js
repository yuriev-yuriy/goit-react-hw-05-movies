const BASE_URL = 'https://developers.themoviedb.org/3/';

async function fetchFunc(url = '') {
  const response = await fetch(
    `${BASE_URL}trending/all/day?api_key=c5a07ae819d95fe3119594f7b17c2bc2`,
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export default fetchFunc;
//     fetchTrending(page) {
//     return fetchFunc(`${BASE_URL}trending/all/day?page=${page}?api_key=c5a07ae819d95fe3119594f7b17c2bc2`)
// }
