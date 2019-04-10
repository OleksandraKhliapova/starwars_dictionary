import React from 'react';

const Character = (props) => {
  return(
    <div className="character-block">
      <p className="character-block__title">{props.character.name}</p>
    </div>
  )
}

export default Character;