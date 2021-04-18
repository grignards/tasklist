import React from 'react';
import Title from './title';
import Task from './task';
import NewTask from './new_task';
import Checkbox from './checkbox';


const defaultTask = {
  // eslint-disable-next-line indent
  label: '',
  done: false
};

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      taskList: [],
      // bonjour: true
    }
    // console.log('component has finished constructor')
  }


  addItemTaskList = (newTaskLabel) => {
    this.setState(previousState => ({
      taskList: [
        ...previousState.taskList,
        { ...defaultTask, label: newTaskLabel }
      ]
    }));
  }

  markAsDone = () => this.setState({
    done: true
  })

  handleChangeBonjour = () => this.setState({
    bonjour: false
  })

  render () {
    return (
      <div className='main'>
        <Title label='Todo App'/>
        {this.state.taskList.map((task, i) => (
          <div
            className="new_task"
            key={`${task.label}_${i}`}
          >
            <Checkbox
              onChangeToggle={this.markAsDone}
            />
            <Task
              done={task.done}
              taskName={task.label}
            />
          </div>
        ))}
        <NewTask
          onClickSubmit={this.addItemTaskList}
        />
      </div>
    );
  }
}

export default App;

// <hr />
// <hr />
// <hr />
// <button onClick={this.handleToggleBonjour}>Click me</button>
// <br />
// {(this.state.bonjour
//   ? <Title label='Todo App'/>
//   : <div>aurevoir</div>
// )}

// componentDidMount() {
//   console.log('component has finish its first render')
// }

// componentDidUpdate() {
//   console.log('component has finished update')
// }

// componentWillUnmount() {
//   console.log('component will unmount')
// }
