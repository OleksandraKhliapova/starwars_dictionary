export function getCharacters(searchString) {
  return fetch(`https://swapi.co/api/people/?search=${searchString}`).then(response => {
    return response.json();
  })
}