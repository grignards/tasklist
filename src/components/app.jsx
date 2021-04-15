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
      taskList: []
    }
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

  render () {
    return (
      <div className='main'>
        <Title label='Todo App'/>

        {this.state.taskList.map((task, i) => (
          <div className="new_task">
            <Checkbox
              onChange={this.markAsDone}
            />
            <Task
              taskName={task.label}
              key={`${task.label}_${i}`}
              done={task.done}
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
