import React from 'react';

class Title extends React.Component {
  componentWillUnmount () {
    console.log('Title will unmount')
  }

  render () {
    const { props } = this
    return (
      <div className="title">{props.label}</div>
    );
  }
}

export default Title;
