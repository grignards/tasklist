import React from 'react';

class Checkbox extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     checked: true
  //   }
  // }

  // handleCheck = () => {
  //   this.setState({
  //     checked: false
  //   })
  // }

  // render() {
  //   return (
  //      <input type='checkbox' onChange={this.props.checked} checked={this.state.checked} />
  //   )
  // }

  render() {
    return (
       <input type='checkbox' {this.props.checked}/>
    )
  }
}

export default Checkbox;
