import db from './db';
const redux  = require('redux');

const noteInitialState = {
    isVisibaleSectionForm: true,
    isVisibleTaskForm: true
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_NEW_SECTION":
            db.addSection(action.sectionName);
            return state
        case "ADD_NEW_TASK":
            db.addNewTask(action.sectionName,action.taskName);
            return state
        default:
            return state
    }
}

const store = redux.createStore(allReducer);

export default store;