import React, { Component } from 'react';
import {connect} from 'react-redux';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            taskData: {
                selectTask: '',
                taskName: ''
            }
        }
    }
    
    isChange = event => {
        // console.log(`${event.target.name} : ${event.target.value}`);
        this.setState({
            taskData: {
                ...this.state.taskData,
                [event.target.name]: event.target.value
            }
        })
    }

    addTask = () => {
        let task = this.state.taskData;
        this.props.addNewTask(task.selectTask, task.taskName);
    }
    
    render() {
        return (
            <div className="form">
                <form method="get" acceptCharset="utf-8" onChange={(event) => this.isChange(event)}>
                    <div className="item">
                        <p className="label">Section: </p>
                        <select name="selectTask">
                            <option value={"Section 1"}>Section 1: To do list</option>
                            <option value={"Section 1"}>Section 1: To do list</option>
                            <option value={3}>Section 1: To do list</option>
                            <option value={4}>Section 1: To do list</option>
                            <option value={5}>Section 1: To do list</option>
                            <option value={1}>Section 1: To do list</option>
                            <option value={2}>Section 1: To do list</option>
                            <option value={3}>Section 1: To do list</option>
                            <option value={4}>Section 1: To do list</option>
                            <option value={5}>Section 1: To do list</option>
                        </select>
                    </div>
                    <div className="item">
                        <p className="label">Task Name: </p>
                        <input type="text" name="taskName" placeholder="Task Name" />
                    </div>
                    <div className="btn-submit" onClick={() => this.addTask()}>
                        <span>Create</span>
                    </div>
                </form>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isVisibale: state.isVisibleTaskForm
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNewTask: (sectionName, taskName) => {
            dispatch({type: "ADD_NEW_TASK", sectionName, taskName});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);