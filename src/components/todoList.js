import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delSingleItem } from '../features/todoSlice';
import { sortBy } from 'lodash';

function TodoList() {
  const dispatch = useDispatch();
  const todos_ar = useSelector((state) => state.todoSlice.todos_ar);
  let sort_ar = sortBy(todos_ar, 'time');

  return (
    <div className="col-md-7">
      {sort_ar.map((item) => {
        return (
          <div key={item.id} className="border shadow-sm my-2 p-2">
            <button
              onClick={() => {
                dispatch(delSingleItem({ delId: item.id }));
              }}
              className="btn btn-danger float-end"
            >
              X
            </button>
            <h3>
              {item.name} - {item.time}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
