import React from 'react';
import Title from './title';
import Task from './task';
import NewTask from './new_task';
import Checkbox from './checkbox';


const defaultTask = {
  // eslint-disable-next-line indent
  label: '',
  done: false,
};

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      taskList: [],
      bonjour: true
    }
    console.log('component has finished constructor')
  }

  componentDidMount() {
    console.log('component has finish its first render')
  }

  componentDidUpdate() {
    console.log('component has finished update')
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  addItemTaskList = (newTaskLabel) => {
    this.setState(previousState => ({
      taskList: [
        ...previousState.taskList,
        { ...defaultTask, label: newTaskLabel }
      ]
    }))
    // const newTaskList = this.state.taskList;
    // const newTaskFull = {
    //   ...defaultTask,
    //   label: newTaskLabel
    // }
    // // const newTaskFullOld = Object.assign(defaultTask, newTask)
    // newTaskList.push(newTaskFull);
    // this.setState({
    //   taskList: newTaskList,
    // });
  }

  markAsDone = () => {
    this.setState()
    // if onChange, task.done
  }

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
              onChange={this.markAsDone}
            />
            <Task
              taskName={task.label}
              done={task.done}
            />
          </div>
        ))}
        <NewTask
          onClickSubmit={this.addItemTaskList}
        />
        <hr />
        <hr />
        <hr />
        <button onClick={this.handleToggleBonjour}>Click me</button>
        <br />
        {(this.state.bonjour
          ? <Title label='Todo App'/>
          : <div>aurevoir</div>
        )}

      </div>
    );
  }
}

export default App;
