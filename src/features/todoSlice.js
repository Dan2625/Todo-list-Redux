import { createSlice } from '@reduxjs/toolkit';

const KEY_LOCAL = 'todo_local';

const initState = localStorage[KEY_LOCAL]
  ? JSON.parse(localStorage[KEY_LOCAL])
  : {
      todos_ar: [],
    };

const todoSlice = createSlice({
  name: 'todos',
  initialState: initState,
  reducers: {
    addNewItem: (state, action) => {
      state.todos_ar.push(action.payload.todoItem);
      saveOnLocal(state);
    },
    resetAllItems: (state, action) => {
      state.todos_ar = [];
      saveOnLocal(state);
    },
    delSingleItem: (state, action) => {
      state.todos_ar = state.todos_ar.filter(
        (item) => item.id != action.payload.delId
      );
      saveOnLocal(state);
    },
  },
});

const saveOnLocal = (state) => {
  localStorage.setItem(KEY_LOCAL, JSON.stringify(state));
};

export const { addNewItem, resetAllItems, delSingleItem } = todoSlice.actions;
export default todoSlice.reducer;
