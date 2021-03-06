import React, { Component } from 'react'
import './ItemStatusFilter.sass'

class ItemStatusFilter extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ]



  render() {

    const {filter, onFilterChange} = this.props

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter ===name
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'

      return (
        <button 
          type="button" 
          className={`btn ${clazz}`}
          onClick={() => onFilterChange(name)}
          key={name}>{label}</button>
      )
    })

    return (
      <div className="ItemStatusFilter btn-group">
        {buttons}
      </div>
    )
  }
}

export default ItemStatusFilter