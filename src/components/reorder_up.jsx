import React from 'react';

class ReorderUp extends React.Component {

  render () {
    const { props } = this
    return (
      <button
        className="reorder_up"
        onClick={this.props.onClick}
        disabled={props.disabled}
      >
      ⬆️
      </button>
    );
  }
}

export default ReorderUp;
