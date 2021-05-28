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
      <div className="column" onClick={this.props.onClick} onDrag={this.props.onDrag}>
        {this.props.taskName}
      </div>
    )
  }
}

export default Task;
