import React from 'react';

class NewTask extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      newTaskLabel: '',
    };
  }

  handleChangeLabel = (e) => {
    this.setState({
      newTaskLabel: e.target.value
    });
  }

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.onFormSubmit()
    }
  }

  onFormSubmit = e => {
    if (this.state.newTaskLabel !== "") {
      this.props.onClickSubmit(this.state.newTaskLabel)
      this.setState({
        newTaskLabel: ""
      });
    }
  }

  render () {
    return (
      <div>
        <input type='text' value={this.state.newTaskLabel} onChange={this.handleChangeLabel} onKeyDown={this.handleKeyDown}/>
        <button type="button" onClick={this.onFormSubmit}>Submit</button>
      </div>
    );
  }
}
export default NewTask;
