import React from 'react';

class Checkbox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: true
    }
  }

  handleCheck = () => {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <input
        type='checkbox' defaultChecked={this.state.checked} onChange={this.handleCheck}
      />
    )
  }
}

export default Checkbox;
