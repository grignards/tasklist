import React from 'react';

class Task extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     done: false
  //   };
  // }

  // markAsDone = () => {
  //   this.setState((e) => {
  //     return {
  //       done: e.target.value
  //     }
  //   })
  // }

  render () {
    return (
      <div onClick={this.props.onClick}>
        {this.props.taskName}
      </div>
    )
  }
}

export default Task;
