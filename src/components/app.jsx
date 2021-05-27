import React from 'react';
import Title from './title';
import Task from './task';
import NewTask from './new_task';
import Checkbox from './checkbox';
import Delete from './delete';

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
  order: 1,
  done: false
};

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      taskList: [],
    }
  }

  addItemTaskList = newTaskLabel => {
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

  markAsDone = taskId => {
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
              done: !task.done
            }
          } else {
            return task
          }
        })
      }
    });
  }

  // return new array

  markAsDeleted = taskId => {
    this.setState(previousState => {
      return {
        taskList: previousState.taskList.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              deleted: !task.deleted
            }
          } else {
            return task
          }
        })
      }
    });
  }

  // adapter celle ci avec l'id

  markAsDeleted = taskId => {
    this.setState(previousState => ({
      taskList: [
        ...previousState.taskList,
        {
          ...taskId,
          id: autoIncrement(previousState.taskList),
          label: newTaskLabel
        }
      ]
    }));
  }

  markAsDeleted = taskId => {
    this.setState(previousState => ({
      taskList: previousState.taskList.filter(task => task.id !== taskId)
    }));
  };

  handleSortUpA1 = (taskId) => {
    // permuter taskId avec son prédécesseur
    // A1: on change uniquement la property "order" des elements de taskslit
  }

  handleSortDownA1 = (taskId) => {

  }

  handleSortUpA2 = (taskId) => {
    // A2: on change l'ordre des lements dans tasklist
  }

  handleSortDownA2 = (taskId) => {

  }

  handleSortUpA3 = (taskId) => {
    // A3: on change l'ordre dans elements dans taskOrderList
  }

  handleSortDownA3 = (taskId) => {

  }

  // taskList.prototype.swap = function (x,y) {
  //   var b = this[x];
  //   this[x] = this[y];
  //   this[y] = b;
  //   return this;
  // }
  // list.swap( x, y )

  render () {
    const sortedTaskList = this.state.taskOrderList.map(id =>
      this.state.taskList.find(task => task.id === id)
    )
    return (
      <div className='main'>
        <Title label='Todooo App'/>
        {this.state.taskList.map((task, i) => (
          <div
            className="task"
            key={`${task.label}_${i}`}
          >
            <Checkbox
              checked={task.done}
              onClick={e => this.markAsDone(task.id)}
            />
            <Task
              done={task.done}
              taskName={task.label}
              onClick={e => this.markAsDone(task.id)}
            />
            <Delete
              onClick={e => this.markAsDeleted(task.id)}
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
