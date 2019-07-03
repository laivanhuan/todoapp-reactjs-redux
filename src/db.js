const db = {
    addSection: (sectionName) => {
        localStorage.setItem(sectionName,"[]");
    },

    addNewTask: (sectionName,taskName) => {
        let section = JSON.parse(localStorage.getItem(sectionName));
        let posTask = section.length;
        section[posTask] = {'id' : posTask, taskName};
        localStorage.setItem(sectionName,JSON.stringify(section));
    },

    getAllSection: () => {
        let arrKeys = [];
        for(let i = 0; i< localStorage.length; i++) {
            arrKeys.push(localStorage.key(i));
        }
        return arrKeys;
    },

    getAllTasks: (sectionName) => {
        return JSON.parse(localStorage.getItem(sectionName));
    }
}

export default db;