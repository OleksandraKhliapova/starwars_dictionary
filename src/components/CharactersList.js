import React from 'react';
import { connect } from 'react-redux';

import Character from './Character';

const CharactersList = (props) => {
  return (
    props.characters.map((character) => {
      return <Character key={character.name} character={character}/>
    })
  )
}

function mapStateToProps(state) {
  const { characters } = state;

  return {
    characters
  };
}

export default connect(mapStateToProps)(CharactersList);