import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {

  const API = "http://localhost:4000/a5/todos";

  const [todo, setTodo] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09", completed: false,
  });
  const [todos, setTodos] = useState([]);
  const [errorMessages, setErrorMessages] = useState(null);

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  const removeTodo = async (todo) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  }
  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  const updateTitle = async () => {
    const response = await axios.get(
      `${API}/${todo.id}/title/${todo.title}`
    );
    setTodos(response.data);
  };

  const deleteTodo = async (todo) => {
    try{
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      setErrorMessages(error.response.data.message);
    }

  };

  const updateDescription = async () => {
    const response = await axios.get(
      `${API}/${todo.id}/description/${todo.description}`
    );
    setTodos(response.data);
  }

  const updateCompleted = async () => {
    const response = await axios.get(
      `${API}/${todo.id}/completed/${todo.completed}`
    );
    setTodos(response.data);
  }

  const updateTodo = async () => {
    try{
    const response = await axios.put(`${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (t.id === todo.id ? response.data : t)));
    setTodo({}); // clear the form
    } catch (error) {
      setErrorMessages(error.response.data.message);
    }
  }

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary me-2">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo,
          id: e.target.value
        })} />
      <a href={`${API}/${todo.id}`}
        className="btn btn-primary me-2">
        Get Todo by ID
      </a>

      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`} className="btn btn-primary me-2">
        Get Completed Todos
      </a>

      <h4>Creating new Items in an Array</h4>
      <a href={`${API}/create`}
        className="btn btn-primary me-2">
        Create Todo
      </a>

      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value
        })}
        className="form-control mb-2"
        type="number"
      />

      <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value
        })}
        className="form-control mb-2"
        type="text"
      />

      <h3>Updating an Item in an Array</h3>
      <a href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2">
        Update Title to {todo.title}
      </a>
{/*  */}
      <textarea
    onChange={(e) => setTodo({ ...todo, description: e.target.value })}
    value={todo.description} type="text"
  />
  <button onClick={updateDescription} className="btn btn-primary mb-2">
    Update Description
  </button>

  <label>
    <input
      onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
      checked={todo.completed} type="checkbox"
    />
    Completed
  </label>
  <button onClick={updateCompleted} className="btn btn-primary mb-2">
    Update Completed Status
  </button>
{/*  */}

      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value
        })}
        className="form-control mb-2"
        type="number"
      />

      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`}
        className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>

      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value
        })}
        className="form-control mb-2"
        type="number"
      />

      <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value
        })}
        className="form-control mb-2"
        type="text"
      />

      <button onClick={createTodo}
        className="btn btn-primary mb-2 w-100">Create Todo</button>

      <button onClick={updateTitle}
        className="btn btn-success mb-2 w-100">
        Update Title
      </button>


      <textarea
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        value={todo.description} type="text"
      />
      <div style={{ height: '1em' }}></div>
      <input
        onChange={(e) => setTodo({ ...todo, due: e.target.value })}
        value={todo.due} type="date"
      />
      <div style={{ height: '1em' }}></div>
      <label>
        <input
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
          value={todo.completed} type="checkbox"
        />
        Completed
      </label>
      <div style={{ height: '1em' }}></div>
      <button onClick={postTodo}
        className="btn btn-warning me-2 w-100"
      >Post Todo</button>
      <button onClick={updateTodo}
        className="btn btn-warning me-2 w-100"
      >Update Todo</button>

      {errorMessages && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessages}
        </div>
      )}

      <div style={{ height: '1em' }}></div>




      <ul className="list-group">

        {todos.map((todo) => (
          <li key={todo.id}
            className="list-group-item">
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end">Edit</button>


            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2">
              Delete
            </button>



            <input
              checked={todo.completed}
              type="checkbox" readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>

          </li>
        ))}
      </ul>

    </div>
  );
}
export default WorkingWithArrays;
