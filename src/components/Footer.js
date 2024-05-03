import React from "react";

const Footer = ({ todos, searchTodo }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}
        >
            <button
                style={{
                    margin: 10,
                    padding: 10,
                    borderRadius: 10,
                }}
                onClick={() => {
                    todos.map((todo) => {
                        return console.log(todo);
                    });
                }}
            >
                Console All Todos
            </button>
            <input
                style={{
                    margin: 10,
                    padding: 10,
                    borderRadius: 10,
                }}
                onChange={(e) => {
                    searchTodo(e.target.value);
                }}
                type="text"
                placeholder="Search Todo"
            />
        </div>
    );
};

export default Footer;
