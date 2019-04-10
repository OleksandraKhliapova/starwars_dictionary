import React, { PureComponent } from'react';

class SearchForm extends PureComponent {
  state = {
    value: ''
  }

  valueChange = (e) => {
    this.setState({value: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
  }

  render() {
    return(
      <form onSubmit={this.onSubmit} className="search-form">
        <input className="search-form__input" onChange={this.valueChange} placeholder="Add hashtag" type="text" value={this.state.value}/>
        <input className="search-form__submit" type="submit" value="Search"/>
      </form>
    )
  }
}

export default SearchForm;