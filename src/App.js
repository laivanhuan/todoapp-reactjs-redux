import React, { Component } from 'react';
import Menu from './components/menu/Menu';
import NoteSection from './components/note-section/NoteSection';
import SectionForm from './components/form/SectionForm';
import TaskForm from './components/form/TaskForm';
import db from './db';

class App extends Component {

  renderSections = () => {
    let sections = db.getAllSection();
    sections = sections.map((val,key) => <NoteSection sectionName={val} key={key}></NoteSection>);
    return sections
  }

  render() {
    return (
      <div className="note-board">
        <Menu></Menu>
        <SectionForm></SectionForm>
        <TaskForm></TaskForm>

        <div className="board-content">
          {
            this.renderSections()
          }
        </div>
      </div>
    );
  }
}

export default App;
