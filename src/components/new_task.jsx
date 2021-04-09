import React from 'react';

class NewTask extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      newTaskLabel: '',
    };
  }

  handleChangeLabel = (e) => {
    // e.target.value
    this.setState({
      newTaskLabel: e.target.value
    });
  }

  render () {
    return (
      <div>
        <input type='text' value={this.state.newTaskLabel} onChange={this.handleChangeLabel} />
        <button
          type='button'
          // onClick={this.props.onClickSubmit} // par reference
          onClick={e => this.props.onClickSubmit(this.state.newTaskLabel)}
        >
          Submit
        </button>
      </div>
    );
  }
}
export default NewTask;
