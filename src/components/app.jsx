import React from 'react'

const defaultTask = {
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
            <div>
                <Title label='Todo App' />
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
            <div>
                <div> - </div>
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

const Title = props => {
    return (
        <div>{props.label}</div>
    )
}

const Checkbox = props => {
    return (
        <input type='checkbox' checked='checked' />
    )
}
