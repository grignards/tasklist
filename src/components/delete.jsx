import React from 'react';

class Delete extends React.Component {

  render () {
    const { props } = this
    return (
      <button
        className="delete"
        onClick={this.props.onClick}
      >
      ❌
      </button>
    );
  }
}

export default Delete;
