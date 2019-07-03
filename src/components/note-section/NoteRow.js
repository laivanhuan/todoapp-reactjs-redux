import React, { Component } from 'react';

class NoteRow extends Component {
    render() {
        return (
            <div className="note-row">
                <i className="far fa-check-circle" />
                <textarea wrap="off" className="content" defaultValue={this.props.taskName} />
                <i className="far fa-trash-alt" />
            </div>
        );
    }
}

export default NoteRow;