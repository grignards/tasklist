import React from 'react';

class Checkbox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  handleCheck_old = () => {
    this.setState((prevState) => {
      return {
        checked: !prevState.checked
      }
    })
  }

  /*
  alternative approche sans avoir à utiliser une fonction en parametre de setState
  setCheck = () => {
    this.setState({
      checked: true
    })
  }

  setUnCheck = () => {
    this.setState({
      checked: false
    })
  }

  handleChange = () => {
    if (this.state.checked){
      // handle stuff
      this.setCheck()
    } else {
      this.setUnCheck()
    }
  }
  */

  render() {
    return (
      <input
        type='checkbox' defaultChecked={this.state.checked} onChange={this.handleCheck_old}
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
