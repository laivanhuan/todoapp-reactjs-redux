import React, { Component } from 'react';
import {connect} from 'react-redux';
import db from '../../db';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisibale: true,
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

    renderOptions = () => {
        let options = db.getAllSection();
        options = options.map((val,key) => <option value={val} key={key}>{val}</option>);
        return options
    }

    componentWillMount(){
        this.setState({
            isVisibale: this.props.isVisibale
        });
    }
    
    render() {
        if(this.state.isVisibale){
            return (
                <div className="form">
                    <form method="get" acceptCharset="utf-8" onChange={(event) => this.isChange(event)}>
                        <div className="item">
                            <p className="label">Section: </p>
                            <select name="selectTask">
                                <option>Choose a task</option>
                                {
                                    this.renderOptions()
                                }
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
        }else return(<div></div>)
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