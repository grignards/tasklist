import React from 'react';
import PropTypes from 'prop-types';


class Task extends React.Component {
  render () {
    return (
      <div onClick={this.props.onClick}>
        {this.props.taskName}
      </div>
    )
  }
}

export default Task;

Task.propTypes = {
  taskName: PropTypes.string,
  onClick: PropTypes.func
}

Task.defaultProps = {
  taskName: '',
  onClick: () => {}
}
