import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import api from "./api/todos";
import TodoAppForm from "./components/TodoAppForm";
import TodoAppList from "./components/TodoAppList";

const App = () => {
  const [inputFieldValue, setinputFieldValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditingId, setIsEditingId] = useState(null);
  const deleteAllTodos = async () => {
    try {
      setIsDeleting(true);
      const deletePromises = todos.map((todo) =>
        api.delete(`/todos/${todo.id}`)
      );
      await Promise.all(deletePromises);
      setTodos([]);
      setIsDeleting(false);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  return (
    <div className="w-[90vw] md:w-[80vw] lg:w-[38vw] pt-[3rem] rounded-2xl space-y-2 mx-auto py-3 bg-white text-textPrimary shadow-lg">
      <TodoAppForm
        isDeleting={isDeleting}
        setIsDeleting={setIsDeleting}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        todos={todos}
        setTodos={setTodos}
        inputFieldValue={inputFieldValue}
        setinputFieldValue={setinputFieldValue}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        isEditingId={isEditingId}
        setIsEditingId={setIsEditingId}
      ></TodoAppForm>
      <TodoAppList
        isDeleting={isDeleting}
        setIsDeleting={setIsDeleting}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        todos={todos}
        setTodos={setTodos}
        inputFieldValue={inputFieldValue}
        setinputFieldValue={setinputFieldValue}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        isEditingId={isEditingId}
        setIsEditingId={setIsEditingId}
      ></TodoAppList>
      <div className="w-[85%] pb-2 mx-auto">
        <button
          onClick={deleteAllTodos}
          className="text-white px-2 text-sm py-2 bg-danger rounded-lg hover:bg-red-600"
        >
          Clear all Todos
        </button>
      </div>
      <Analytics />
    </div>
  );
};

export default App;
