import React, { Component } from 'react';
import { connect } from 'react-redux';

class Menu extends Component {
    render() {
        return (
            <div className="board-header">
                <div className="btn-control-group" >
                    <div className="btn-control">
                        <i className="far fa-calendar-plus" onClick={this.props.showSectionForm}/>
                        <span>Add Section</span>
                    </div>
                    <div className="btn-control" >
                        <i className="fas fa-plus-circle" onClick={this.props.showTaskForm}/>
                        <span>Add Task</span>
                    </div>
                    <div className="btn-control">
                        <i className="fas fa-list-ul" />
                        <span>All Tasks</span>
                    </div>
                    <div className="btn-control">
                        <i className="fas fa-tasks" />
                        <span>Complete Tasks</span>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showTaskForm: () => {
            dispatch({type: "SHOW_TASK_FORM"});
        },
        showSectionForm: () => {
            dispatch({type: "SHOW_SECTION_FORM"});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);