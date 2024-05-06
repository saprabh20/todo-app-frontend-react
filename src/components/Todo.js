import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ todo, deleteTodo, executeScroll }) => {
    const [completed, setCompleted] = useState(todo.completed);
    executeScroll();
    let bc;
    bc = completed ? "#519fff8e" : "#AED2FF";
    return (
        <div
            style={{
                borderRadius: 10,
                backgroundColor: bc,
                height: "250px",
                width: "220px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginRight: 20,
                marginBottom: 20,
                padding: 10,
                border: "2px solid black",
            }}
        >
            <div
                style={{
                    height: "160px",
                    width: "160px",
                    textWrap: "break-wrap",
                    wordWrap: "break-word",
                    overflow: "auto",
                }}
                className="todoContent"
            >
                <h2
                    style={{
                        textDecoration: "underline",
                        marginBottom: "2px",
                    }}
                >
                    {todo.title}
                </h2>
                <h4>{todo.description}</h4>
            </div>
            <div
                style={{
                    height: "70px",
                    width: "160px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}
                className="buttonGroup"
            >
                <button
                    style={{
                        margin: 10,
                        padding: 10,
                        borderRadius: 10,
                    }}
                    onClick={() => {
                        todo.completed = true;
                        setCompleted(true);
                    }}
                >
                    {completed ? "Completed" : "Mark as Complete"}
                </button>
                <button
                    className="deleteBtn"
                    onClick={() => deleteTodo(todo.id)}
                >
                    ➖
                </button>
            </div>
        </div>
    );
};

export default Todo;
