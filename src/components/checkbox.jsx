import React from 'react';

class Checkbox extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     done: false,
  //   }
  //   updateState = updateState.bind(this)
  // }

  // handleCheck_old = () => {
  //   this.setState((prevState) => {
  //     return {
  //       done: !prevState.done
  //     }
  //   })
  // }

  render() {
    return (
      <input
        type='checkbox'
        checked={this.props.checked}
        // onChange={this.handleCheck_old}
        onClick={this.props.onClick}
      />
    )
  }
}

export default Checkbox;

/*
const osef = a => a + 1
const osef3 = (a) => { return a + 1 }

const osef2 = function (a) {
  return a + 1
}


const osef4 = a => ({ propertyA: a })
const osef5 = function (a) {
  return {
    propertyA: a
  }
}


async function getSpaceList () {
  const result = await fetch('/api/get/spaces', { userId: 1})
  this.setState({
    spaceList: result.body
  })
}

function getStaceList2 () {
  fetch('/api/get/spaces', { userId: 1})
  .then(result => {
    this.setState({
      spaceList: result.body
    })
  })
}
*/
