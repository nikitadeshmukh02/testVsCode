import React, { Component } from 'react'
import ReactDom from 'react-dom'
import SearchBar from './search_bar'
class App extends Comment {
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }

}
ReactDom.render(<App />, document.querySelector('.container'))