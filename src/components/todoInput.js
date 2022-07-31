import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addNewItem, resetAllItems } from '../features/todoSlice';

function TodoInput() {
  const dispatch = useDispatch();

  const nameRef = useRef();
  const timeRef = useRef();

  const onAddClick = () => {
    let todoObj = {
      name: nameRef.current.value,
      time: timeRef.current.value,
      id: Date.now(),
    };
    dispatch(addNewItem({ todoItem: todoObj }));
  };

  return (
    <div className="col-md-6">
      <label>Enter task name: </label>
      <input ref={nameRef} type="text" className="form-control" />
      <label>Enter task time: </label>
      <input ref={timeRef} type="time" className="form-control" />
      <div className="taxt-center my-3">
        <button onClick={onAddClick} className="btn btn-success me-2">
          Add new task
        </button>
        <button
          onClick={() => {
            window.confirm('Delete all?') && dispatch(resetAllItems());
          }}
          className="btn btn-danger"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
