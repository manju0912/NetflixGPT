import {createSlice} from '@reduxjs/toolkit'

const claudeSlice = createSlice({
    name: "claudeSearch",
    initialState: {
        showClaudeSearch: false,
    },
    reducers: {
        toggleSearchView: (state) => {
            state.showClaudeSearch = !state.showClaudeSearch;
        },
    },
})

export const {toggleSearchView} = claudeSlice.actions;
export default claudeSlice.reducer;