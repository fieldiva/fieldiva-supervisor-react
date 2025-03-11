import { createSlice } from "@reduxjs/toolkit";

const allModalSlice = createSlice({
    name: "modal",
    initialState: {
        listDelete: false,
        listEdit: false,
        listFilter: false,
        createTask: false,
        assignTask: false
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
        }
    }
})

export const {toggleDelete, toggleListEdit, toggleListFilter, toggleCreateTask, toggleAssignTask} = allModalSlice.actions
export default allModalSlice.reducer