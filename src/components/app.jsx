import React from 'react';
import Title from './title';
import Task from './task';
import NewTask from './new_task';
import Checkbox from './checkbox';
import Delete from './delete';
import ReorderUp from './reorder_up.jsx';
import ReorderDown from './reorder_down.jsx';

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

const dragSrcEl = null;

// var cols = document.querySelectorAll('#columns .column');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      taskList: [],
      taskOrderList: []
    }
  }

  addItemTaskList = newTaskLabel => {
    this.setState(previousState => {
      const newId = autoIncrement(previousState.taskList)
      return {
        taskList: [
          ...previousState.taskList,
          {
            ...defaultTask,
            id: newId,
            label: newTaskLabel
          }
        ],
        taskOrderList: [
          ...previousState.taskOrderList,
          newId
        ]
      }
    });
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

  // markAsDeleted = taskId => {
  //   this.setState(previousState => {
  //     return {
  //       taskList: previousState.taskList.map((task) => {
  //         if (task.id === taskId) {
  //           return {
  //             ...task,
  //             deleted: !task.deleted
  //           }
  //         } else {
  //           return task
  //         }
  //       })
  //     }
  //   });
  // }

  markAsDeleted = taskId => {
    this.setState(previousState => ({
      taskList: previousState.taskList.filter(task => task.id !== taskId),
      taskOrderList: previousState.taskOrderList.filter(taskOrderId => taskOrderId !== taskId )
    }));
  };


  // handleSortUpA1 = (taskId) => {
  //   // permuter taskId avec son prédécesseur
  //   // A1: on change uniquement la property "order" des elements de taskslit
  // }

  // handleSortDownA1 = (taskId) => {

  // }

  // handleSortUpA2 = (taskId) => {
  //   // A2: on change l'ordre des lements dans tasklist
  //   const { state } = this

  //   let newState = [...state.taskList] // crée un nouvel array par copie

  //   // taslId = 3
  //   // init: [{id: 2}, {id: 1}, {id: 3}, {id: 4}]
  //   const taskIdIndex = state.taskList.map(task => task.id).indexOf(taskId) // [2, 1, 3, 4].indexOf(taskId) // retourne l'index

  //   const tempPermut = state.taskList[taskIdIndex + 1] // t0 // on copie {id: 4}
  //   newState[taskIdIndex + 1] = state.taskList[taskIdIndex] // t1 // [{id: 2}, {id: 1}, {id: 3}, {id: 3}]
  //   newState[taskIdIndex] = tempPermut // t2 // [{id: 2}, {id: 1}, {id: 4}, {id: 3}]

  //   this.setState({ taskList: newState })
  // }


  // handleSortDownA2 = (taskId) => {
  //   // A2: on change l'ordre des lements dans tasklist
  //   const { state } = this

  //   let newState = [...state.taskList] // crée un nouvel array par copie

  //   // taslId = 3
  //   // init: [{id: 2}, {id: 1}, {id: 3}, {id: 4}]
  //   const taskIdIndex = state.taskList.map(task => task.id).indexOf(taskId) // [2, 1, 3, 4].indexOf(taskId) // retourne l'index

  //   const tempPermut = state.taskList[taskIdIndex - 1] // t0 // on copie {id: 4}
  //   newState[taskIdIndex - 1] = state.taskList[taskIdIndex] // t1 // [{id: 2}, {id: 1}, {id: 3}, {id: 3}]
  //   newState[taskIdIndex] = tempPermut // t2 // [{id: 2}, {id: 1}, {id: 4}, {id: 3}]

  //   this.setState({ taskList: newState })
  // }

  // handleSortDownA2 = (taskId) => {

  // }

  handleSortUpA3 = (taskId) => {
    // A3: on change l'ordre dans elements dans taskOrderList
    const { state } = this

    let newState = [...state.taskOrderList] // crée un nouvel array par copie
    const taskIndex = state.taskOrderList.indexOf(taskId)
    const tempPermut = state.taskOrderList[taskIndex -1]

    newState[taskIndex - 1] = taskId
    newState[taskIndex] = tempPermut

    this.setState({ taskOrderList: newState })

  }

  // handleSortDownA3 = (taskId) => {

  // }


  handleDragStart = taskId => {
    dragSrcEl = this;

    taskId.dataTransfer.effectAllowed = 'move';
    taskId.dataTransfer.setData('text/html', this.outerHTML);

    this.taskId.add('dragElem');
    console.log("start");
  }

  handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    this.taskId.add('over');

    e.dataTransfer.dropEffect = 'move';
    console.log("drag over");

    return false;
  }

  // handleDragEnter(taskId) {
  //   // this / e.target is the current hover target.
  //   console.log("enter");
  // }

  handleDragLeave(taskId) {
    this.taskId.remove('over');
    console.log("leave");
  }

  handleDrop(e) {

    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (dragSrcEl != this) {
      this.parentNode.removeChild(dragSrcEl);
      var dropHTML = e.dataTransfer.getData('text/html');
      this.insertAdjacentHTML('beforebegin',dropHTML);
      var dropElem = this.previousSibling;
      addDnDHandlers(dropElem);
      console.log("drop");


    }
    this.taskId.remove('over');
    console.log("over");
    return false;
  }

  handleDragEnd(taskId) {
    this.taskId.remove('over');

    /*[].forEach.call(cols, function (col) {
      col.classList.remove('over');
    });*/
  }

  addDnDHandlers(taskId) {
    // taskId.addEventListener('dragstart', handleDragStart, false);
    // taskId.addEventListener('dragenter', handleDragEnter, false)
    // taskId.addEventListener('dragover', handleDragOver, false);
    // taskId.addEventListener('dragleave', handleDragLeave, false);
    // taskId.addEventListener('drop', handleDrop, false);
    // taskId.addEventListener('dragend', handleDragEnd, false);
  }


    taskDnD = taskId => {
      this.setState(previousState => ({
        taskList: previousState.taskList.forEach.call(addDnDHandlers(taskId))
      }));
    };


  render () {
    // const sortedTaskList = this.state.taskOrderList.map(id =>
    //   this.state.taskList.find(task => task.id === id)
    // )
    return (
      <div className='main' id="colums">
        <Title label='Todooo App'/>
        {this.state.taskOrderList.map((taskId, i) => {
          const task =  this.state.taskList.find(task => taskId === task.id)
          return (
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
                // onDrag={e => this.taskDnD(task.id)}
              />
              <ReorderUp
                onClick={e => this.handleSortUpA3(task.id)}
              />
              {/* <ReorderDown
                onClick={e => this.handleSortDownA2(task.id)}
              /> */}
              <Delete
                onClick={e => this.markAsDeleted(task.id)}
              />
            </div>
          )
        })}

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
