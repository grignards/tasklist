import React from 'react';
import Checkbox from './checkbox';

class Task extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     checked: false
  //   };
  // }

  render () {
    return (
      <div className="new_task">
        <Checkbox />
        <div>{this.props.taskName}</div>
      </div>
    );
  }
}

export default Task;


// <Checkbox onClick={ () => { this.setState({ checked: !this.state.checked });}} />
