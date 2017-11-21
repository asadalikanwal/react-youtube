import React, { Component } from 'react';


class SearchBar extends Component{

    constructor(props) {
        super(props);

        this.state = { 
            term: ''
        };
    }


    onInputChange(term) {
        this.setState({
            term: term
        })

        this.props.onSearchTermChange(term);
    }


    render(){
        return (
            <div className="searchbar">
                <input onChange={event => this.onInputChange(event.target.value)} placeholder="Search youtube videos.." />
            </div>
        );
    }

    
}

export default SearchBar;