import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    const location = prompt('enter new location')
    this.props.store.editItem(this.props.item.name, location)
  }
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name)
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox" value={item.name} onClick={this.checkItem} /> 
        <span>{item.name}</span>
        <span> {item.location}</span>
        <button className='editButton' onClick={this.editItem} >edit</button>
        <button className='deleteButton' onClick={this.deleteItem} >delete</button>
      </div>)
  }
}

export default Item