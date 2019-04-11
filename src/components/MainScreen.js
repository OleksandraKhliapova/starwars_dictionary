import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { searchCharacter } from '../store/reducer';

import SearchForm from './SearchForm';
import CharactersList from './CharactersList';

class MainScreen extends PureComponent {
  onSearchFormSubmit = (value) => {
    if (value) {
      this.props.searchCharacter(value);
    }
  }

  render() {
    return (
      <>
        <SearchForm onSubmit={this.onSearchFormSubmit} />
        <CharactersList />
      </>
    )
  }
}

export default connect(null, { searchCharacter })(MainScreen);