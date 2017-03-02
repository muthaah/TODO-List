import React, { Component } from 'react';

export default class Task extends Component {
	constructor(props){
    super(props)
    this.activeTodos = this.activeTodos.bind(this)
    this.completed = this.completed.bind(this)
  }


  activeTodos() {

  }

  completed() {

  }

	render() {
		return(
			<div className="task">
			  <label className="waves-effect waves-light" id="all-todo" onClick={this.props.displayAllTodos}>All</label>
			  <label className="waves-effect waves-light" id="toggle-all" onClick={this.props.toggleAll}>Toggle</label>
			  <label className="waves-effect waves-light" id="active-todo" onClick={this.props.displayActiveTodos}>Active</label>
			  <label className="waves-effect waves-light" id="complete-todo" onClick={this.props.displayCompletedTodos}>Completed</label>
			</div>
		)
	}
}