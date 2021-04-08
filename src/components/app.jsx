import React from 'react';

const defaultTask = {
    // eslint-disable-next-line indent
    label: '',
    done: false
}

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            taskList: []
        }
    }

    addItemTaskList = newTaskLabel => {
        // this.setState(previousState => ({
        //     taskList: [...previousState.taskList, newTask]
        // }))
        const newTaskList = this.state.taskList
        const newTaskFull = {
            ...defaultTask,
            label: newTaskLabel
        }
        // const newTaskFullOld = Object.assign(defaultTask, newTask)
        newTaskList.push(newTaskFull)
        this.setState({
            taskList: newTaskList
        })
    }

    render () {
        return (
            <div class="main">
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
        )
    }
}

export default App

class Task extends React.Component {
    render () {
        return (
            <div class="new_task">
                <Checkbox />
                <div>{this.props.taskName}</div>
            </div>
        )
    }
}

class NewTask extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            newTaskLabel: ''
        }
    }

    handleChangeLabel = (e) => {
        // e.target.value
        this.setState({
            newTaskLabel: e.target.value
        })
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
        )
    }
}

class Checkbox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: "checked"
    }
  }

  handleCheck() {
    this.setState({
      checked: " "
    })
  }

  render() {
    return (
      <input
        type='checkbox'
        checked={this.state.checked}
        onChange={this.props.handleCheck}
      />
    )
  }
}

const Title = props => {
    return (
        <div class="title">{props.label}</div>
    )
}
