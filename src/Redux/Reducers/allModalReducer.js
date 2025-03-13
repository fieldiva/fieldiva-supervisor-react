import { createSlice } from "@reduxjs/toolkit";

const allModalSlice = createSlice({
    name: "modal",
    initialState: {
        projectModal: true,
        listDelete: false,
        listEdit: false,
        listFilter: false,
        createTask: false,
        assignTask: false,
        reportFilter: false
    },
    reducers: {
        toggleDelete: (state)=> {
            state.listDelete = !state.listDelete
        },
        toggleListEdit : (state) => {
            state.listEdit = !state.listEdit
        },
        toggleListFilter: (state) => {
            state.listFilter = !state.listFilter
        },
        toggleCreateTask: (state) => {
            state.createTask = !state.createTask
        },
        toggleAssignTask: (state) => {
            state.assignTask = !state.assignTask
        },
        toggleProjectModal: (state) => {
            state.projectModal = !state.projectModal
        },
        toggleReportFilter: (state) => {
            state.reportFilter = !state.reportFilter
        }
    }
})

export const {toggleDelete, toggleListEdit, toggleListFilter, toggleCreateTask, toggleAssignTask, toggleProjectModal, toggleReportFilter} = allModalSlice.actions
export default allModalSlice.reducer