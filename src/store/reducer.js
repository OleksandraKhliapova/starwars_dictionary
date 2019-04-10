import { getCharacters } from '../apis';

const initialState = {
  characters: []
};

const SET_CHARACTERS = 'SET_CHARACTERS';

export function searchCharacter(searchString) {
  return dispatch => {
    getCharacters(searchString).then(data => {
      dispatch({ type: SET_CHARACTERS, data: data.results })
    })
  }
}

export default function reducer (state = initialState, action) {
const { type,data } = action;

  switch(type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: data
      };
      
    default:
      return state
  }
}