import React, {Component} from 'react'
import classes from './SearchPanel.module.sass'

class SearchPanel extends Component {
  
  state = {
    term: ''
  }

  onSearchChange = event => {
    const term = event.target.value
    this.setState({term})
    this.props.onSearchChange(term)
  }

  render() {
    return (
      <input 
        type="text"
        placeholder="type to search"
        className={classes.SearchPanel}
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    )
  }
}

export default SearchPanel