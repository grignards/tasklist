import React from 'react';
import Checkbox from './checkbox';

class Task extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     checked: true
  //   };
  // }

  render () {
    return (
      <div className="new_task">
        <Checkbox onChange={this.handleCheck} />
        <div>{this.props.taskName}</div>
      </div>
    )
  }
}

export default Task;


// <Checkbox onClick={ () => { this.setState({ checked: !this.state.checked });}} />
