import React from 'react';
import Title from './title';
import Task from './task';
import NewTask from './new_task';
import Checkbox from './checkbox';

const autoIncrement = list => {
  if (list.length === 0) {
    return 0
  }
  const listWithOnlyId = list.map((task) => {
    return task.id
  })
  return Math.max(...listWithOnlyId) + 1
}

const defaultTask = {
  id: 0,
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
    // const newId =
    this.setState(previousState => ({
      taskList: [
        ...previousState.taskList,
        {
          ...defaultTask,
          id: autoIncrement(previousState.taskList),
          label: newTaskLabel
        }
      ]
    }));
  }

  markAsDone = (taskId) => {
    this.setState(previousState => {
      // const elem = previousState.taskList.find((task) => {
      //   return task.id === taskId
      // })
      // if (elem === undefined) return previousState
      return {
        taskList: previousState.taskList.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              done: true
            }
          } else {
            return task
          }
        })
      }
    });
  }

  test = (test) => {
    console.log('test')
  }

  // handleChangeBonjour = () => this.setState({
  //   bonjour: false
  // })


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
              checked={task.done}
              onClick={e => this.markAsDone(task.id)}
            />
            <Task
              taskName={task.label}
              onClick={e => this.markAsDone(task.id)}
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
