import React from 'react';

class ReorderDown extends React.Component {

  render () {
    const { props } = this
    return (
      <button
        className="reorder_down"
        onClick={this.props.onClick}
      >
      ⬆️
      </button>
    );
  }
}

export default ReorderDown;
