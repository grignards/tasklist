import React from 'react';
import Title from './title';
import Task from './task';
import NewTask from './new_task';

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
        { ...defaultTaskList, label: newTaskLabel }
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

  render () {
    return (
      <div className="main">
        <Title label='Todo App'/>
        {this.state.taskList.map((task, i) => (
          <Task
            taskName={task.label}
            done={task.done}
            key={`${task.label}_${i}`}
          />
        ))}
        <NewTask
          onClickSubmit={this.addItemTaskList}
        />
      </div>
    );
  }
}

export default App;
