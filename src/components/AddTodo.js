import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = ({ todos, setTodos }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="createTodo">
            <h1>ADD A TODO 📝</h1>
            <input
                className="inputs"
                type="text"
                placeholder="Title"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <textarea
            rows={15}
                className="inputs"
                type="text"
                placeholder="Description"
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <button
                className="addButton"
                onClick={() => {
                    setTodos([
                        ...todos,
                        {
                            id:
                                Math.floor(
                                    Math.random() * (9999999 - 1000001)
                                ) + 1000000,
                            title: title,
                            description: description,
                            completed: false,
                        },
                    ]);
                }}
            >
                ADD ➕
            </button>
        </div>
    );
};

export default AddTodo;
