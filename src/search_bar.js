import React, { Component } from 'react';

// const SearchBar =() => 
// {
// return <input/>//React.createElement
// } Functional Component Dump Component
class SearchBar extends Component//Class Component Ability to comuniate other comp 
//and maintain state. Here extends Component gives SearchBar class bunch of functionalites
{

    constructor(props) {
        super(props);
        this.state = { term: '' }
    }


    render() {

        //return <input onChange={this.onInputChange}/>
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={(event) => this.onInputChange( event.target.value )} />

            </div>
        )
    }

     onInputChange(term)
  {
      debugger
      this.setState({term});
      this.props.onSearchTermChange(term);
    // console.log(event.target.value);
 }
}

export default SearchBar;