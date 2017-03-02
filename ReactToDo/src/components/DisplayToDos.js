import React, { Component } from 'react';
import _ from 'lodash';

export default class DisplayToDos extends Component {
	constructor(props){
    super(props)
    this.state = {
    	isEditing: false
    }
    this.editTodo = this.editTodo.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  editTodo() {
  	this.setState({isEditing: true})
  }

  formSubmit(event) {
  	event.preventDefault()
  	const newContent = this.refs.newValue.value
  	const oldContent = this.props.content
  	this.props.updateTodos(newContent, oldContent)
  	this.setState({isEditing: false})
  }

  toggle() {
    const index = this.refs.checkbox.id;
    const oldCheckboxVal = this.props.todos[index];
    this.props.updateCheckbox(oldCheckboxVal)
  }

   render() {
   	if(this.state.isEditing) {
   		return(
   			<form onSubmit={this.formSubmit}>
          <label>editing...</label>
          <input
            className="input-style"
            type="text"
            defaultValue={this.props.content}
            ref="newValue"
          />
   			</form>
   		)
   	}
		return(
			<li key={this.props.keys} className="z-depth-2">
        <input
          type="checkbox"
          className="filled-in"
          id={this.props.id}
          ref="checkbox"
          checked={this.props.isCompleted ? "checked":""}
          onChange={this.toggle}
        />
        <label
          htmlFor={this.props.id}>
          {this.props.content}
        </label>
        <div className="actions">
          <label
            className="edit transparent"
            onClick={this.editTodo}>
            <i className="tiny material-icons">mode_edit</i>
          </label>
          <label className="delete transparent" onClick={this.props.onDelete}>&times;</label>
        </div>
      </li>
    )
  }
}
 