import React, { Component } from 'react';
import NoteRow from './NoteRow';
import db from '../../db';

class NoteSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrNote: []
        }
    }
    

    componentWillMount(){
        let arrNotes = db.getAllTasks(this.props.sectionName);
        this.setState({
            arrNotes
        });
    }

    renderNotes = () => {
        
        return this.state.arrNotes.map((val,key) => <NoteRow taskName={val.taskName} key={val.id}></NoteRow>)
    }

    render() {
        return (
            <div className="note-section">
                <textarea wrap="off" className="section-title" defaultValue={this.props.sectionName} />
                <div className="note-row-group">
                    { this.renderNotes() }
                </div>
            </div>
        );
    }
}

export default NoteSection;