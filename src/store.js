import db from './db';
const redux  = require('redux');

const noteInitialState = {
    isVisibaleSectionForm: false,
    isVisibleTaskForm: false,
    sections: db.getAllSection()
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_NEW_SECTION":
            db.addSection(action.sectionName);
            return {...state,sections: db.getAllSection()}
        case "ADD_NEW_TASK":
            db.addNewTask(action.sectionName,action.taskName);
            return state
        case "SHOW_TASK_FORM":
            return {...state,isVisibleTaskForm: !state.isVisibleTaskForm}
        case "SHOW_SECTION_FORM":
            return {...state,isVisibaleSectionForm: !state.isVisibaleSectionForm}
        default:
            return state
    }
}

const store = redux.createStore(allReducer);

export default store;