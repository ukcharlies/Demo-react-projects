import React, { useEffect, useState } from "react";
import todoSvg from "../assets/calendar-svgrepo-com.svg";
import api from "../api/todos";

const TodoAppForm = ({
  inputFieldValue,
  setinputFieldValue,
  setIsEditing,
  setTodos,
  todos,
  isEditingId,
  setIsEditingId,
  setIsLoading,
  isLoading,
  isEditing,
}) => {
  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/todos?_limit=20");
      setTodos(response.data.reverse());
      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  const onSumbitHandler = async (e) => {
    e.preventDefault();
    if (!isEditing) {
      try {
        const newTask = {
          id: Date.now(),
          title: inputFieldValue,
          completed: false,
        };

        // const response = await api.post("/todos", newTask);
        // console.log(response.data);
        setTodos((prevTodos) => [newTask, ...prevTodos]);
        setinputFieldValue("");
        console.log(inputFieldValue);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    } else {
      const updatedTodo = { title: inputFieldValue };
      console.log(isEditingId);
      try {
        setTodos(
          todos.map((todo) =>
            todo.id === isEditingId ? { ...todo, ...updatedTodo } : todo
          )
        );
        await api.put(`/todos/${isEditingId}`, updatedTodo);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
      setIsEditing(false);
      setIsEditingId(null);
      setinputFieldValue("");
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      <p className="text-4xl text-center pb-4 font-medium font-serif text-primary">
        6ix Tasktracker
      </p>
      <form
        onSubmit={onSumbitHandler}
        className="flex items-center max-w-[85%] mx-auto"
      >
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img className="size-4" src={todoSvg} alt="" />
          </div>
          <input
            onChange={(e) => {
              setinputFieldValue(e.target.value);
            }}
            type="text"
            value={inputFieldValue}
            id="simple-search"
            className="bg-white border border-gray-300 text-textPrimary text-sm rounded-lg focus:ring-secondary focus:border-secondary block pl-10 p-2.5"
            placeholder="Add todo..."
            required
          />
        </div>
        <button
          type="submit"
          className={`p-2.5 ml-2 w-[55%] lg:w-[35%] md:text-md text-sm font-medium ${
            isEditing
              ? "bg-danger text-white border-danger hover:bg-red-600 focus:ring-red-300"
              : "bg-secondary text-white border-secondary hover:bg-blue-800 focus:ring-blue-300"
          } rounded-lg border focus:ring-4 focus:outline-none`}
        >
          {isEditing ? "Update" : "Add Todo"}
          <span className="sr-only">Search</span>
        </button>
      </form>
    </div>
  );
};

export default TodoAppForm;
