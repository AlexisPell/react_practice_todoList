import React, { Component } from 'react'
import './ItemAddForm.sass'

class ItemAddForm extends Component {

  state = {
    label: ''
  }

  onLabelChange = event => {
    this.setState({
      label: event.target.value
    })
  }

  submitForm = event => {
    this.props.onItemAdded(this.state.label)
    event.preventDefault()
    this.setState({
      label: ''
    })
  }

  render() {
    return(
      <div className="ItemAddForm">
        <form 
          className="item-add-form"
          onSubmit={this.submitForm}>

          <input 
            type="text"
            className="form-control"
            onChange={this.onLabelChange}
            placeholder="Smth else ToDo?"
            value={this.state.label}
          />

          <button 
            className="btn btn-outline-secondary" 
          >Add Item</button>

        </form>
      </div>
    )
  }
}

export default ItemAddForm