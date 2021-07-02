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

  handleSubmit = e => {
    e.preventDefault();
    alert("submit");
    // or you can send to backend
  };

  render () {
    return (
      <div>
        <input type='text' value={this.state.newTaskLabel} onChange={this.handleChangeLabel} />
        <button
          type='submit'
          onClick={this.handleSubmit}
          // onClick={e => this.props.onClickSubmit(this.state.newTaskLabel)}
        >
          Submit
        </button>
      </div>
    );
  }
}
export default NewTask;

//////////////////////////////////////////////////////:

// import React from 'react';

// class NewTask extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       newTaskLabel: '',
//     };
//   }

// handleChangeLabel = (e) => {
//   this.setState({
//     newTaskLabel: e.target.value
//   });
// }

// onFormSubmit = e => {
//   this.props.onClickSubmit(this.state.newTaskLabel)
// }

//   render () {
//     return (
//       <div>
//         <input type='text' value={this.state.newTaskLabel} onChange={this.handleChangeLabel} />
//           <button type="submit" onSubmit={this.onFormSubmit}>Submit</button>
//       </div>
//     );
//   }
// }
// export default NewTask;
