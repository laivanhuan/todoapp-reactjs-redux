import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="board-header">
                <div className="btn-control-group">
                    <div className="btn-control">
                        <i className="far fa-calendar-plus" />
                        <span>Add Section</span>
                    </div>
                    <div className="btn-control">
                        <i className="fas fa-plus-circle" />
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

export default Menu;