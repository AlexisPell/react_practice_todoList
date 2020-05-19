import React, { Component } from 'react'
import './App.sass'

import AppHeader from './../AppHeader/AppHeader'
import TodoList from './../TodoList/TodoList'
import SearchPanel from './../SearchPanel/SearchPanel'
import ItemStatusFilter from './../ItemStatusFilter/ItemStatusFilter'
import ItemAddForm from './../ItemAddForm/ItemAddForm'


class App extends Component {

  maxId = 100

  state = {
    todoData: [
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Take a shower'),
      this.createTodoItem('Cook up a breakfast')
    ],
    term: '',
    filter: 'all'
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  onItemAdded = text => {
    const newItem = this.createTodoItem(text)

    this.setState(({todoData}) => {
      const newData = [ ...todoData, newItem]
      
      return {
        todoData: newData
      }
    }) 
  }

  deleteItem = id => {
    this.setState(({todoData}) => {
      let newData = todoData.filter(el => el.id !== id)

      return {
        todoData: newData
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = {...oldItem,
      [propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onSearchChange = term => {
    this.setState({term})
  }

  onFilterChange = filter => {
    this.setState({filter})
  }

  search(items, term) {
    if (term.length === 0) {
      return items
    }

    return items.filter(items => {
      return items.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  filter(items, filter) {
    switch(filter) {
      case 'all':
        return items
      case 'active':
        return items.filter(item => !item.done)
      case 'done':
        return items.filter(item => item.done)
      default:
        return items
    }
  }

  render() {

    const {todoData, term, filter} = this.state

    const visibleItems = this.filter(this.search(todoData, term), filter)

    const doneCount = todoData
      .filter(el => el.done).length

    const toDoCount = todoData.length - doneCount

    return (
      <div className="App">
        <div>
          <AppHeader toDo={toDoCount} done={doneCount} />

          <div className="App_container">
            <SearchPanel onSearchChange={this.onSearchChange}/>
            <ItemStatusFilter 
              onFilterChange={this.onFilterChange}
              filter={filter}/>
          </div>

          <TodoList 
            todos={visibleItems} 
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
            />
          <ItemAddForm onItemAdded={this.onItemAdded}/>
        </div>
      </div>
    )
  }
}

export default App