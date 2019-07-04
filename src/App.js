import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  renderForm = (cond, obj) => {
    if (cond) return obj;
  }

  render() {
    return (
      <div className="note-board">
        <Menu></Menu>
        { this.renderForm(this.props.isVisibaleSectionForm, <SectionForm></SectionForm>) }
        { this.renderForm(this.props.isVisibleTaskForm, <TaskForm></TaskForm>) }

        <div className="board-content">
          {
            this.renderSections()
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isVisibaleSectionForm: state.isVisibaleSectionForm,
    isVisibleTaskForm: state.isVisibleTaskForm
  }
}

export default connect(mapStateToProps)(App);
