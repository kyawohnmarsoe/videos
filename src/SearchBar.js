import React from 'react'

class SearchBar extends React.Component{
    state = {term:''}
    changeHandler = (e) => {
        this.setState({ term : e.target.value})
        
    }
    formSubmit = (e) => {
        e.preventDefault()
        this.props.searchSubmit(this.state.term)
    }
    render(){
        return <div className="ui segment">
            <form className="ui form" onSubmit={this.formSubmit}>
                <input 
                    type="text" 
                    value={this.state.term}
                    onChange={this.changeHandler}
                />
            </form>
        </div>
    }
}

export default SearchBar