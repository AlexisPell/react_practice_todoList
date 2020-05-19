import React, {Component} from 'react'
import './TodoListItem.sass'

class TodoListItem extends Component {

  

  render() {
    const { label, onDeleted, 
      onToggleDone, onToggleImportant, 
      done, important 
    } = this.props
    
    let cls = "TodoListItem"
    if (done === true) {
      cls += ' done'
    }

    if (important === true) {
      cls += ' important'
    }

    return (
      <span className={cls}> 
        <span 
          onClick={onToggleDone}
          >{label}</span> 
      
        <button 
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >  <i className="fa fa-exclamation" />
        </button>
  
        <button 
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
  
      </span>
    )
  }
}

export default TodoListItem

